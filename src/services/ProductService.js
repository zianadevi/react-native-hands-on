import { sleep } from "../features/shared/sleep";
import {DATA} from '../data/products';

export const productService = () => {
    const getAllProduct = async (page) => {
        const pagePerRow = 20;
        const startIndex = (page - 1) * pagePerRow;
        const endIndex = page * pagePerRow;
        try {
            return await sleep((resolve, reject) => {
                const response = DATA.slice(startIndex, endIndex)
                if (response.length === 0) {
                    reject('No more data')
                } else {
                    resolve(response)
                }
            }, 1000)
        } catch (e) {
            throw e;
        }
    }
    return {getAllProduct}
}