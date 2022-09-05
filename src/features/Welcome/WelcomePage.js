import { StyleSheet, View } from "react-native"
import MainContainer from "../shared/components/MainContainer";
import LottieView from 'lottie-react-native'
import AppBackground from "../shared/components/AppBackground";
import TitleLabel from "../shared/components/TitleLabel";
import FormButton from "../shared/components/FormButton";

const WelcomePage = () => {
    return(
        <MainContainer>
            <AppBackground style={{ 
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <View style={styles.titleContainer}>
                    <TitleLabel text='POS System'/>
                    <TitleLabel subTitle text='Simple Point of Sales'/>
                </View>
                <LottieView autoPlay
                    style={styles.image}
                    source={require('../../../assets/img/110304-popeye.json')}     
                />
                <FormButton label='SIGN IN' onClick={()=>{}}></FormButton>
            </AppBackground>
                
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 300,
        alignItems: 'center'
    },
    titleContainer: {
        alignItems: 'center'
    },
})
export default WelcomePage;