import { FlatList, View } from "react-native";
import { useTheme } from "../../../shared/context/ThemeContext";
import MenuItem from "./MenuItems";

const MenuView = () => {
    const theme = useTheme()
    const menus = [
        {id : 1, menu : 'Menu 1', icon: 'glass'},
        {id: 2, menu: 'Menu 2', icon: 'music'},
        {id: 3, menu: 'Menu 3', icon: 'heart'},
        {id: 4, menu: 'Menu 4', icon: 'star'},
        {id: 5, menu: 'Menu 5', icon: 'user'},
        {id: 6, menu: 'Menu 6', icon: 'film'},
        {id: 7, menu: 'Menu 7', icon: 'music'},
        {id: 8, menu: 'Menu 8', icon: 'star'},
        {id: 9, menu: 'Menu 9', icon: 'glass'},
        {id: 10, menu: 'Menu 10', icon: 'heart'},
        {id: 11, menu: 'Menu 11', icon: 'music'},
        {id: 12, menu: 'Menu 12', icon: 'film'},
    ];
    const renderItem = ({item}) => {
        return <MenuItem product={item} />
    }

    const renderMenuViews = () => {
        const menuViews = []
        for(let i=0; i < menus.length; i++) {
            const startIndex = (i * 3);
            const endIndex = (i * 3 + 3);
            const dataMenu = menus.slice(startIndex, endIndex);
            let contentStyle = {
                flex: 1, justifyContent: 'space-between'
            }
            if (dataMenu.length % 3 !== 0) {
                dataMenu.push({id: -1, menu: '', icon: ''})
            }
            const n = (
                <FlatList
                    key={i}
                    data={dataMenu}
                    horizontal
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={contentStyle}
                />
            )
            menuViews.push(n)
        }
        return menuViews;
    }

    return (
        <View style={{flex: 1, marginHorizontal: theme.spacing.m}}>
            {renderMenuViews()}
        </View>
    )
}

export default MenuView;