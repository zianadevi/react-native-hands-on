import LoginPage from "../../features/Login/LoginPage";
import {screen} from "@testing-library/react-native";
import { themeRender } from "../../testHelper/CustomRender";

const mockUseLogin = jest.fn();
jest.mock("../../features/Login/UseLoginPage", () => () => mockUseLogin())

describe('Login Page', () => {
    test('Should render properly', () => {
        mockUseLogin.mockReturnValue({
            viewState: {isLoading: false, data: null, error: null},
            userName: '',
            password: '',
            setUserName: jest.fn(),
            setPassword: jest.fn(),
            onAuthenticate: jest.fn()
        });
        themeRender(<LoginPage/>);
        expect(screen.queryByPlaceholderText('Enter your email')).toBeTruthy();
        expect(screen.queryByPlaceholderText('Enter your password')).toBeTruthy();
        expect(screen.queryByText('Login')).toBeTruthy();
    });

    test('Should show spinner when loading', () => {
        mockUseLogin.mockReturnValue({
            viewState: {isLoading: true, data: null, error: null},
            userName: '',
            password: '',
            setUserName: jest.fn(),
            setPassword: jest.fn(),
            onAuthenticate: jest.fn()
        });
        themeRender(<LoginPage/>);
        expect(screen.queryByText('Please Wait')).toBeTruthy();
    });

    test('Should show snackbar when error', () => {
        mockUseLogin.mockReturnValue({
            viewState: {isLoading: false, data: null, error: new Error('error')},
            userName: '',
            password: '',
            setUserName: jest.fn(),
            setPassword: jest.fn(),
            onAuthenticate: jest.fn()
        })
        themeRender(<LoginPage/>);
        expect(screen.queryByText('error')).toBeTruthy();
    })
})