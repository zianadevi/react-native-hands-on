import { StyleSheet, Text, View } from "react-native"
import { useTheme } from "../context/ThemeContext";

const Spinner = ({text = 'Please Wait'}) => {
    const theme = useTheme();
    const styles = styling(theme);

    return (
        <View style={styles.container}>
            <View style={styles.loadingContainer}>
                <Text>{text}</Text>
            </View>
        </View>
    )
}

const styling = (theme) => StyleSheet.create({
    container : {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent : 'center',
        padding : theme.spacing.s,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
    }, 
    loadingContainer : {
        backgroundColor : theme.colors.primary,
        padding: theme.spacing.s,
        borderRadius: theme.radius.m
    }
})

export default Spinner;