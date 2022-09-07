import {StyleSheet, View } from "react-native";
import MainContainer from "../shared/components/MainContainer";
import AppBackground from "../shared/components/AppBackground";
import TitleLabel from "../shared/components/TitleLabel";
import FormInput from "../shared/components/FormInput";
import FormPassword from "../shared/components/FormPassword";
import FormButton from "../shared/components/FormButton";
import Spinner from "../shared/components/Spinner";
import Snackbar from "../shared/components/Snackbar";
import useLoginPage from "./UseLoginPage";

const LoginPage = () => {
    const {viewState, userName, password, setUserName, setPassword, onAuthenticate} = useLoginPage()

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
            {viewState.error !== null && <Snackbar message={viewState.error.message}/>}
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