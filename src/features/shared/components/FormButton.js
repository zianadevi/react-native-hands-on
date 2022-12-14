import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { useTheme } from "../context/ThemeContext"

const FormButton = ({label, onClick}) => {
    const theme = useTheme()
    const styles = styling(theme)
    return(
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}

export default FormButton;

const styling = (theme) => (
    StyleSheet.create({
        button:{
            alignItems: 'center',
            backgroundColor: theme.colors.primary,
            padding : theme.spacing.s,
            borderRadius: theme.radius.m,
            alignSelf : 'stretch',
            margin: theme.spacing.m
        },
        textButton : {
            color : theme.colors.black,
            fontFamily : 'Poppins-Bold'
        }
    })
)