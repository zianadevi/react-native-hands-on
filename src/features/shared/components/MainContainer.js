import { StatusBar, StyleSheet, View } from "react-native"

const MainContainer = ({children}) => {
    return(
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={'white'} />
            {children}
        </View>
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