import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../context/ThemeContext"
import MainContainer from "./MainContainer";
import FormButton from "./FormButton";
import {ROUTE} from '../constants';

const PinPage = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const styles= styling(theme)
    const [pin, setPin] = useState('');
    const route = useRoute();
    const [pinParam, setPinParam] = useState({});

    useEffect(() => {
        if (route.params?.prevPage){
            setPinParam({
                prevPage: route.params.prevPage
            })
        }
    }, [route.params])

    return (
        <MainContainer>
            <View style={{alignItems: 'center'}}>
                <View style={{width: '50%'}}>
                    <Text style={[theme.text.subtitle2, {textAlign: 'center'}]}>
                        Please input PIN {'\n'} (User id : 123)
                    </Text>
                    <TextInput
                        secureTextEntry
                        style={styles.pinInput}
                        value={pin}
                        onChangeText={setPin}
                        keyboardType='numeric'
                        maxLength={6}
                    />
                </View>
            </View>
            <FormButton
                onClick={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{
                            name: pinParam.prevPage,
                            params: {message : 'OK'}
                        }]
                    });
                }}
                label={'Submit'}
            ></FormButton>
        </MainContainer>
    )
}

const styling = (theme) => StyleSheet.create({
    pinInput : {
        borderBottomColor: theme.colors.foreground,
        borderBottomWidth: 1,
        marginVertical: theme.spacing.l,
        fontSize: 32,
        textAlign: 'center',
    }
})

export default PinPage;