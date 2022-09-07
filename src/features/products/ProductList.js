import { FlatList, View } from "react-native";
import AppBackground from "../shared/components/AppBackground";
import MainContainer from "../shared/components/MainContainer";
import { useTheme } from "../shared/context/ThemeContext"
import Item from "./components/ProductItems";
import HeaderPageLabel from "../../features/shared/components/HeaderPageLabel";
import useProductList from "./UseProductList";

const ProductList = () => {
    const theme = useTheme();
    const {viewState, onRefresh, onFetchMore, onDeleteItem} = useProductList();

    let prevOpenedRow;
    const row = [];

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
                    <FlatList data={viewState.data} 
                        onRefresh={onRefresh}
                        onEndReached={onFetchMore}
                        refreshing={viewState.isLoading}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </AppBackground>
        </MainContainer>
    )
}

export default ProductList;