import { useState } from "react"
import {StyleSheet, View } from "react-native"
import MainContainer from "../shared/components/MainContainer";
import AppBackground from "../shared/components/AppBackground";
import TitleLabel from "../shared/components/TitleLabel";
import FormInput from "../shared/components/FormInput";
import FormPassword from "../shared/components/FormPassword";
import FormButton from "../shared/components/FormButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../shared/constants";

const LoginPage = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(
        <MainContainer>
            <AppBackground>
                <View style={styles.header} >
                    <TitleLabel text='Welcome!'/>
                </View>
                <View style={styles.form}>
                    <FormInput placeholder="Enter your email" onChangeValue={setUsername} value={username}/>
                    <FormPassword placeholder="Enter your password" onChangeValue={setPassword} value={password}/>
                    <FormButton label='Login' onClick={()=>{
                        navigation.replace(ROUTE.MAIN)
                        // keyboard.dismiss
                    }}/>
                </View>
            </AppBackground>
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