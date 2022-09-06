import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../shared/context/ThemeContext"
import MainContainer from "../shared/components/MainContainer";
import FormButton from "../shared/components/FormButton";
import PinButton from "./components/PinButton";
import PinInputIndicator from "./components/PinInputIndicators";

const PinPage2 = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const [pinParam, setPinParam] = useState({});
    const [pin, setPin] = useState('');
    const [pinButtons, setPinButtons] = useState([]);

    useEffect(() => {
        setPinButtons(renderPinButton())
    }, []);

    useEffect(() => {
        if ( route.params?.prevPage){
            setPinParam({
                // userId : route.params.userId,
                prevPage: route.params.prevPage
            })
        }
    }, [route.params])

    const renderPins = ({item}) => {
        return <PinButton text={item} onPress={setPin}/>
    }

    const renderPinButton = () => {
        const pinLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        const shuffledPinLabels = pinLabels
            .map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value);
        shuffledPinLabels.splice(9, 0, '-1');
        shuffledPinLabels.push('<');

        const pins = [];
        for (let i = 0; i < shuffledPinLabels.length; i++) {
            const startIndex = (i * 3);
            const endIndex = (i * 3 + 3);
            const buttons = shuffledPinLabels.slice(startIndex, endIndex);
            const b = (
                <FlatList
                    key={i}
                    data={buttons}
                    horizontal
                    renderItem={renderPins}
                    keyExtractor={item => item}
                    contentContainerStyle={{flex: 1, justifyContent: 'space-evenly'}}
                />
            )
            pins.push(b)
        }
        return pins
    }

    return (
        <MainContainer>
            <View style={{ alignItems: 'center'}}>
                <View style={{width: '50%'}}>
                    <Text style={[theme.text.subtitle2, {textAlign: 'center'}]}>
                        Please input PIN {'\n'} (User id : 123)
                    </Text>
                    <View style={{margin: theme.spacing.l}}>
                        <PinInputIndicator pinVal={pin}/>
                    </View>
                </View>
            </View>

            <View style={{flex: 1, justifyContent: 'center'}}>
                {pinButtons}
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


export default PinPage2;