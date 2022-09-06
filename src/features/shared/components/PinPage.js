import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/ThemeContext"
import MainContainer from "./MainContainer";
import FormButton from "./FormButton";

const PinPage = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const styles= styling(theme)
    const [pin, setPin] = useState(['', '', '', '']);
    const route = useRoute();
    const [pinParam, setPinParam] = useState({});

    var arr = [];
    do {
        let num = Math.floor(Math.random() * 10);
        arr.push(num);
        arr = arr.filter((item, index) => {
          return arr.indexOf(item) === index
        });
    } while (arr.length < 10);

    const renderItem = ({item}) => {
        return (
            <>
                <TouchableOpacity key={item} onPress={() => onPressNumber(item)}>
                    <View style={[styles.inputView, styles.inputOval]}>
                        <Text style={styles.textNumber}>{item}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    const onPressNumber = (num) => {
        let tempCode = [...pin];
        for (var i = 0; i < tempCode.length; i++) {
            if(tempCode[i] === '') {
                tempCode[i] = num;
                break;
            } else {
                continue;
            }
        }
        setPin(tempCode);
    }

    const onPressCancel = () => {
        let tempCode = [...pin];
        for (var i = tempCode.length - 1; i >= 0; i--) {
            if (tempCode[i] !== '') {
                tempCode[i] = '';
                break;
            } else {
                continue;
            }
        }
        setPin(tempCode);
    }

    useEffect(() => {
        if (route.params?.prevPage){
            setPinParam({
                prevPage: route.params.prevPage
            })
        }
    }, [route.params])

    // useEffect(() => {
    //     if (!pin.includes('')) {
    //         handleSubmitPassCode();
    //     }
    // }, [pin]);

    // const handleSubmitPassCode = () => {
    //     const passCodeStringVal = pin.join('')
    //     handleClearPassCode();
    //     alert(passCodeStringVal)
    // }

    // const handleClearPassCode = () => {
    //     setPin(['', '', '', ''])
    // }

    return (
        <MainContainer>
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{width: '50%'}}>
                    <Text style={[theme.text.subtitle2, {textAlign: 'center'}]}>
                        Please input PIN {'\n'} (User id : 123)
                    </Text>
                    <View style={styles.pinContainer}>
                        {pin.map((p) => {
                            let style = p !== '' ? styles.pinInput2 : styles.pinInput1;
                            return <View style={style}></View>
                        })}
                    </View>
                    {/* <TextInput
                        secureTextEntry
                        style={styles.pinInput}
                        value={pin}
                        onChangeText={setPin}
                        keyboardType='numeric'
                        maxLength={6}
                    /> */}
                </View>
            </View>
            <View style={{flex: 3}}>
                <View style={styles.inputContainer}>
                    <FlatList data={arr}
                        renderItem={renderItem}
                        numColumns={3}
                        columnWrapperStyle={{justifyContent: 'space-around'}}
                    />
                </View>
            </View>
            <View>
               <TouchableOpacity onPress={() => onPressCancel()}>
                    <Text style={[theme.text.subtitle2, {textAlign: 'center', marginBottom: 30}]}>Cancel</Text>
               </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
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
            </View>
        </MainContainer>
    )
}

const styling = (theme) => StyleSheet.create({
    pinInput1 : {
        width: 13,
        height: 13,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: theme.colors.orange
    },
    pinInput2 : {
        width: 13,
        height: 13,
        borderRadius: 13,
        backgroundColor: theme.colors.orange
    },
    pinContainer:{
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputView : {
        width: 64,
        height: 64,
        margin: theme.spacing.s
    },
    inputOval : {
        borderColor: theme.colors.orange,
        borderWidth: 2,
        borderRadius: 32,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12
    },
    inputContainer : {
        alignItems : 'center',
    },
    textNumber : {
        color: theme.colors.orange,
        fontFamily: 'Poppins-Bold'
    }
})

export default PinPage;