import {useDependency} from '../shared/hook/UseDependency';
import { useEffect, useState } from "react";
import useViewState from "../shared/hook/UseViewState";

const useProductList = () => {
    const {productService} = useDependency();
    const [page, setPage] = useState(1);
    const [isNext, setIsNext] = useState(true);
    const {viewState, setLoading, setData, setError} = useViewState();

    const onGetAllProduct = async () => {
        setLoading(true, false);
        try {
            const response = await productService.getAllProduct(page, 20);
            if (page === 1) {
                setData(response)
            } else {
                const result = [...viewState.data, ...response]
                setData(result)
            }
            setIsNext(true)
        } catch (e) {
            console.log(e);
            setIsNext(false);
            setError(false);
        }
    }

    useEffect(() => {
        onGetAllProduct();
    }, [page]);

    const onFetchMore = async () => {
        if (isNext) {
            setPage(prevState => prevState + 1)
        } else {
            await onGetAllProduct()
        }
    }

    const onRefresh = async () => {
        if (page !== 1) {
            setPage(1)
        } else {
            await onGetAllProduct();
        }
    }

    const onDeleteItem = async (index) => {
        console.log('Delete item', viewState.data[index])
        await onRefresh();
    }

    return {viewState, onRefresh, onFetchMore, onDeleteItem}
}

export default useProductList;