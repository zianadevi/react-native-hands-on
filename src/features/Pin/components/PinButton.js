import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "../../shared/context/ThemeContext"

const PinButton = ({text, onPress}) => {
    const theme = useTheme()
    const styles = styling(theme)
    const handleButtonPress = () => {
        if (text !== '<') {
            onPress(prevState => {
                if (prevState.length < 6) {
                    return prevState + text
                } else {
                    return prevState
                }
            })
        } else {
            onPress(prevState => prevState.slice(0, -1))
        }
    }
    const renderButton = () => {
        if (text !== '-1') {
            return (
                <TouchableOpacity onPress={handleButtonPress}>
                    <View style={styles.circleButton}>
                        <Text style={[theme.text.subtitle2]}>{text}</Text>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <View style={{width: 96}}></View>
            )
        }
    }

    return (
        <>
            {renderButton()}
        </>
    )
}

const styling = (theme) => StyleSheet.create({
    circleButton : {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderColor: theme.colors.foreground,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing.m
    }
})

export default PinButton;