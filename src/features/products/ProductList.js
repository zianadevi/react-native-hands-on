import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import AppBackground from "../shared/components/AppBackground";
import MainContainer from "../shared/components/MainContainer";
import { useTheme } from "../shared/context/ThemeContext"
import {useDependency} from '../shared/hook/UseDependency';
import Item from "./components/ProductItems";
import HeaderPageLabel from "../../features/shared/components/HeaderPageLabel";

const ProductList = () => {
    const theme = useTheme();
    const {productService} = useDependency();
    const [products, setProducts] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [isNext, setIsNext] = useState(true);

    let prevOpenedRow;
    const row = [];

    const onGetAllProduct = async () => {
        setFetching(true);
        try {
            const response = await productService.getAllProduct(page);
            if (page === 1) {
                setProducts([
                    ...response
                ]);
            } else {
                setProducts(prevState => [
                    ...prevState,
                    ...response
                ]);
            }
            setFetching(false);
            setIsNext(true)
        } catch (e) {
            console.log(e);
            setIsNext(false);
            setFetching(false);
        }
    }

    useEffect(() => {
        onGetAllProduct();
    }, [page]);

    const onFetchMore = async () => {
        if (isNext) {
            setPage(prevState => prevState + 1)
        } else {
            onGetAllProduct()
        }
    }

    const onRefresh = async () => {
        setPage(1)
    }

    const onDeleteItem = (index) => {
        console.log('Delete item', products[index])
    }

    const refRows = (index, ref) => {
        row[index] = ref
    }

    const closeRow = (index) => {
        if (prevOpenedRow && prevOpenedRow !== row[index]) {
            prevOpenedRow.close();
        }
        prevOpenedRow = row[index];
    }

    const renderItem = ({item, index}) => {
        return <Item productName={item.productName}
                    idx={index} onDelete={() => onDeleteItem(index)} 
                    refRow={refRows}
                    closeRow={() => closeRow(index)}
                />
    }

    return(
        <MainContainer>
            <AppBackground>
                <View style={{margin : theme.spacing.s}}>
                    <HeaderPageLabel text='Product' />
                    <FlatList data={products} 
                        onRefresh={onRefresh}
                        onEndReached={onFetchMore}
                        refreshing={isFetching}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </AppBackground>
        </MainContainer>
    )
}

export default ProductList;