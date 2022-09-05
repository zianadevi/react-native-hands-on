import { StyleSheet } from "react-native";
import {StatusBar} from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";

const MainContainer = ({children}) => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent style="auto" />
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
});

export default MainContainer;