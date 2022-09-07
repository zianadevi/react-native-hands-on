import { themeRender } from "../../testHelper/CustomRender";
import WelcomePage from "../../features/Welcome/WelcomePage";
import {screen} from "@testing-library/react-native";

describe('Welcome Page', () => {
    test('Should render properly', () => {
        themeRender(<WelcomePage/>);
        expect(screen.queryByText('POS System')).toBeTruthy();
        expect(screen.queryByText('SIGN IN')).toBeTruthy();
    })
})