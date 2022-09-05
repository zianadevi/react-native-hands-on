import { TextInput, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

const FormInput = ({value, onChangeValue, placeholder='', keyboard='default'}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return(
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor='white'
            onChangeText={onChangeValue}
            value={value}
            keyboardType={keyboard}
        />
    )
}

const styling = (theme) => StyleSheet.create({
    input: {
        height: 40,
        marginLeft: theme.spacing.m,
        marginRight: theme.spacing.m,
        marginTop: theme.spacing.s,
        borderWidth: 1,
        color: theme.colors.primary,
        borderRadius: theme.radius.m,
        padding: theme.spacing.s,
        borderColor:theme.colors.primary,
        fontFamily: 'Poppins-Regular'
    }
});

export default FormInput;