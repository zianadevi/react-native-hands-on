import { useState } from "react"
import {Keyboard, StyleSheet, View } from "react-native"
import MainContainer from "../shared/components/MainContainer";
import AppBackground from "../shared/components/AppBackground";
import TitleLabel from "../shared/components/TitleLabel";
import FormInput from "../shared/components/FormInput";
import FormPassword from "../shared/components/FormPassword";
import FormButton from "../shared/components/FormButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../shared/constants";
import useViewState from "../shared/hook/UseViewState";
import { useDependency } from "../shared/hook/UseDependency";
import Spinner from "../shared/components/Spinner";
import Snackbar from "../shared/components/Snackbar";
import { useAuth } from "../shared/hook/UseAuth";


const LoginPage = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {viewState, setLoading, setError} = useViewState();
    const {loginService} = useDependency();
    const {onLogin} = useAuth();

    const onAuthenticate = async () => {
        Keyboard.dismiss();
        setLoading();
        try {
            const response = await onLogin({userName : userName, password : password});
            if (response) {
                navigation.replace(ROUTE.MAIN);
            } else {
                setError(new Error('Unauthorized'))
            }
        } catch (e) {
            setError(e)
        }
    }

    return(
        <MainContainer>
            {viewState.isLoading && <Spinner/>}
            <AppBackground>
                <View style={styles.header} >
                    <TitleLabel text='Welcome!'/>
                </View>
                <View style={styles.form}>
                    <FormInput placeholder="Enter your email" onChangeValue={setUserName} value={userName}/>
                    <FormPassword placeholder="Enter your password" onChangeValue={setPassword} value={password}/>
                    <FormButton label='Login' onClick={onAuthenticate}/>
                </View>
            </AppBackground>
            {viewState.error !== null && <Snackbar message='Unauthorized'/>}
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
    },
    header:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 16,
        marginBottom: 20
    },
    form:{
        alignItems: 'stretch',
        flex: 2
    },
})

export default LoginPage;