import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppBackground from "../../shared/components/AppBackground"
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";
import MainContainer from "../../shared/components/MainContainer";
import {FontAwesome} from '@expo/vector-icons';
import { useTheme } from "../../shared/context/ThemeContext";
import PromoView from "./components/PromoView";
import MenuView from "./components/MenuView";
import { useNavigation, useRoute } from "@react-navigation/native";
import {KEY, ROUTE} from '../../shared/constants';
import { useEffect, useState } from "react";
import ModalDialog from "../../shared/components/ModalDialog";
import { useAuth } from "../../shared/hook/UseAuth";
import { useDependency } from "../../shared/hook/UseDependency";
import { Storage } from "../../shared/Storage";

const MainPage = () => {
    const theme = useTheme();
    const styles = styling(theme);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)
    const route = useRoute();
    const {onLogout} = useAuth();
    const {userInfoService} = useDependency();
    const storage = Storage();
    const [fullName, setFullName] = useState('');

    // ini dapat dari user-info, jadi nama yang muncul random bukan userName
    // const hadleGetFullName = async () => {
    //     try {
    //         const response = await userInfoService.userInfo();
    //         setFullName(response.fullName)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // userName disimpan di storage saat login, disini buat dapetin username dari storage
    const handleGetUserName = async () => {
        try {
            const resp = await storage.getData(KEY.USERNAME)
            setFullName(resp)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        // hadleGetFullName();
        handleGetUserName();
    }, []);

    useEffect(() => {
        if (route.params?.message) {
            console.log(route.name, route.params?.message);
        }
    }, [route.params])

    const handleLogout = async () => {
        try {
            const resp = await onLogout();
            if (resp) {
                navigation.replace(ROUTE.LOGIN)
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <MainContainer>
            <AppBackground>
                <HeaderPageLabel text="WMB" showBorder avatarImg="https://picsum.photos/200/300"/>
                {modalVisible && <ModalDialog onPress={() => setModalVisible(false)} />}
                <ScrollView>
                    <View style={{flex: 1, margin: theme.spacing.s}}>
                        <HeaderPageLabel text='POS'/>
                        <View style={styles.container}>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchAble} onPress={() => setModalVisible(true)}>
                                    <FontAwesome name="sticky-note-o" size={24} color={theme.colors.primary} />
                                    <Text style={styles.textMenu}>Add{'\n'}Order</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchAble} onPress={() => {
                                    // navigation.navigate('Menu1');
                                }}>
                                    <FontAwesome name="user-plus" size={24} color={theme.colors.primary}/>
                                    <Text style={styles.textMenu}>Customer{'\n'}Registration</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchAble} onPress={() => {
                                    navigation.navigate(ROUTE.PIN, {
                                        // userId : 123,
                                        // prevPage : route.name,
                                        prevPage: ROUTE.HOMEPAGE
                                    })
                                }}>
                                    <FontAwesome name="money" size={24} color={theme.colors.primary}/>
                                    <Text style={styles.textMenu}>Bill{'\n'}Payment</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View >
                            <HeaderPageLabel text='Promo'/>
                            <PromoView/>
                        </View>
                        
                        <View>
                            <HeaderPageLabel text='Menu'/>
                            <MenuView/>
                        </View>
                        <View>
                            <HeaderPageLabel text='Profile' />
                            <View style={{marginHorizontal: theme.spacing.m}}>
                                <TouchableOpacity onPress={handleLogout}>
                                    <Text style={styles.textLogout}>Logout {fullName}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </AppBackground>
        </MainContainer>
    )
}

const styling = (theme) => StyleSheet.create({
    container:{
        flexDirection: 'row',
        // borderColor: theme.colors.foreground,
        // borderWidth: 1,
        // borderRadius: theme.radius.m,
    },
    menuContainer: {
        flex: 1,
        height: 64,
        justifyContent: 'center'
    },
    textMenu: {
        textAlign: 'center',
        fontSize: 12,
        color: theme.colors.primary,
        fontFamily: 'Poppins-Regular'
    },
    textLogout: {
        fontSize: 14,
        color: theme.colors.primary,
        fontFamily: 'Poppins-Bold'
    },
    touchAble: {
        alignItems: 'center'
    }
})

export default MainPage;