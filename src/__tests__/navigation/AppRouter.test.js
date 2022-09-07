import { themeRender } from "../../testHelper/CustomRender"
import AppRouter from "../../navigation/AppRouter";
import {screen, waitFor, fireEvent} from "@testing-library/react-native";
import {ROUTE} from "../../features/shared/constants";

const mockTokenExist = jest.fn()
const mockOnLogout = jest.fn()
jest.mock("../../features/shared/hook/UseAuth", () => {
    return {
        useAuth: () => ({
            isTokenExist: mockTokenExist,
            onLogout: mockOnLogout
        })
    }
})
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
describe('App Router', () => {
    test('Should navigate to home when token is exist', () => {
        mockTokenExist.mockResolvedValue(true);
        themeRender(<AppRouter/>)
        expect(waitFor(() => screen.getAllByA11yHint('Home'))).toBeTruthy()
    });
    test('Should navigate to login when token is not exist', () => {
        mockTokenExist.mockResolvedValue(false);
        themeRender(<AppRouter/>)
        expect(waitFor(() => screen.getAllByA11yHint('Welcome'))).toBeTruthy()
    });
    test('Should navigate to login when token throws exception', () => {
        mockTokenExist.mockRejectedValue(new Error('error'));
        themeRender(<AppRouter/>)
        expect(waitFor(() => screen.getAllByA11yHint('Welcome'))).toBeTruthy()
    });
    test('Should navigate to login when user logout', () => {
        mockOnLogout.mockResolvedValue(true)
        themeRender(<AppRouter initRoute={ROUTE.HOMEPAGE}/>)
        const logoutButtonElem = screen.getByText(/Logout/);
        fireEvent.press(logoutButtonElem);
        expect(waitFor(() => screen.getAllByA11yHint('Welcome'))).toBeTruthy()
    });
})