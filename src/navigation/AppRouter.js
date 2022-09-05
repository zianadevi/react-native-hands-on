import CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import LoginPage from "../features/Login/LoginPage";
import ProductList from "../features/products/ProductList";
import { ROUTE } from "../features/shared/constants";
import WelcomePage from "../features/Welcome/WelcomePage";
import MainPage from "../features/Home/Main/MainPage";
import HomePage from "../features/Home/HomePage";

const Stack = CreateStackNavigator();

const AppRouter = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} options={{headerShown: false}} />
            <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} options={{headerShown: false}} />
            <Stack.Screen name={ROUTE.HOMEPAGE} component={MainPage} options={{headerShown: false}} />
            <Stack.Screen name={ROUTE.MAIN} component={HomePage} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AppRouter;