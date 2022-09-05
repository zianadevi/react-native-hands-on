import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "../features/Home/Main/MainPage";
import ProductList from "../features/products/ProductList";
import { ROUTE } from "../features/shared/constants";
import {FontAwesome} from "@expo/vector-icons";
import { useTheme } from "../features/shared/context/ThemeContext";

const Tab = createBottomTabNavigator();

const HomeRouter = () => {
    const theme = useTheme();
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
                switch (route.name) {
                    case ROUTE.HOMEPAGE:
                        return <FontAwesome name='home' size={size} color={color}/>
                    case ROUTE.PRODUCT:
                        return <FontAwesome name='product-hunt' size={size} color={color}/>
                    default:
                        return null
                }
            },
            tabBarActiveTintColor: theme.colors.black
        })}>
            <Tab.Screen name={ROUTE.HOMEPAGE} component={MainPage} options={{headerShown: false}} />
            <Tab.Screen name={ROUTE.PRODUCT} component={ProductList} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default HomeRouter;