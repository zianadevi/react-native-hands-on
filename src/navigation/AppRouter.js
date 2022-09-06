import CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import LoginPage from "../features/Login/LoginPage";
import { ROUTE } from "../features/shared/constants";
import WelcomePage from "../features/Welcome/WelcomePage";
import MainPage from "../features/Home/Main/MainPage";
import HomePage from "../features/Home/HomePage";
import PinPage from "../features/Pin/PinPage";
import {FontAwesome} from "@expo/vector-icons";
import { useTheme } from "../features/shared/context/ThemeContext";
import PinPage2 from "../features/Pin/PinPage2";
import Menu1 from "../features/Home/Menu1";

const Stack = CreateStackNavigator();

const AppRouter = () => {
    const theme = useTheme();
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
           <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} />
                <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} />
                <Stack.Screen name={ROUTE.HOMEPAGE} component={MainPage} />
                <Stack.Screen name={ROUTE.MAIN} component={HomePage} />
                {/* <Stack.Screen name={'Menu1'} componet={Menu1} /> */}
           </Stack.Group>
            {/* <Stack.Group screenOptions={{
                headerStyle: {
                    backgroundColor: 'white'
                },
                headerShadowVisible: false,
                presentation: 'modal',
            }}> */}
                <Stack.Screen name={ROUTE.PIN} component={PinPage2} options={{
                    headerTitle: '',
                    headerBackImage: () => <FontAwesome size={24} name={'chevron-left'} color={theme.colors.foreground} />
                }} />
            {/* </Stack.Group> */}
        </Stack.Navigator>
    )
}

export default AppRouter;