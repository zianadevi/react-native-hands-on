import { useAuth } from "../shared/hook/UseAuth";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../shared/constants";
import useViewState from "../shared/hook/UseViewState";
import { useEffect, useState } from "react";
import {Keyboard } from "react-native";

const useLoginPage = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {viewState, setLoading, setError} = useViewState();
    const {onLogin} = useAuth();

    useEffect(() => {
        setError(null)
    }, [userName, password]);

    const onAuthenticate = async () => {
        Keyboard.dismiss();
        setLoading();
        try {
            if (userName === '' && password === '') {
                throw new Error('Please input your user name and password')
            } else {
                const response = await onLogin({userName : userName, password : password});
                if (response) {
                    navigation.replace(ROUTE.MAIN);
                } else {
                    setError(new Error('Unauthorized'))
                }
            }
        } catch (e) {
            setError(e)
        }
    }
    return {viewState, userName, password, setUserName, setPassword, onAuthenticate}
}

export default useLoginPage;