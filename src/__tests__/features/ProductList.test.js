import {screen} from "@testing-library/react-native";
import ProductList from "../../features/products/ProductList";
import { themeRender } from "../../testHelper/CustomRender";

const mockUseProductList = jest.fn()
jest.mock("../../features/products/UseProductList", () => () => mockUseProductList())

describe('Product List', () => {
    test('Should render some products when first load', () => {
        mockUseProductList.mockReturnValue({
            viewState: {
                isLoading: false,
                data: [
                    {
                        id: '999',
                        productName: 'dummy 1'
                    },
                    {
                        id: '998',
                        productName: 'dummy 2'
                    }
                ],
                error: null
            },
            onRefresh: jest.fn(),
            onFetchMore: jest.fn(),
            onDeleteItem: jest.fn()
        })
        themeRender(<ProductList/>);
        expect(screen.getAllByA11yHint('product-items').length).toBe(2)
    })
})