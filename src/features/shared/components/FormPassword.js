import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {useState} from "react";
import { useTheme } from '../context/ThemeContext';

const FormPassword = ({value, onChangeValue, placeholder = ''}) => {
    const theme = useTheme();
    const styles = styling(theme);
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={[styles.input, styles.inputPasswordContainer]}>
            <TextInput
                secureTextEntry={hidePass}
                placeholder={placeholder}
                placeholderTextColor='white'
                onChangeText={onChangeValue}
                value={value}
                style={{width: '100%', color: 'white'}}
            >
            </TextInput>
            <Pressable onPress={() => setHidePass(!hidePass)}>
                <Entypo name={hidePass ? 'eye-with-line' : 'eye'} 
                    size={15} color={theme.colors.primary}
                />
            </Pressable>
        </View>
    );
};

const styling = (theme) => StyleSheet.create({
    inputPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 24
    },
    input: {
        height: 40,
        marginLeft: theme.spacing.m,
        marginRight: theme.spacing.m,
        marginTop: theme.spacing.s,
        borderWidth: 1,
        borderRadius: theme.radius.m,
        padding: theme.spacing.s,
        borderColor: theme.colors.primary,
        alignItems:'center',
        fontFamily: 'Poppins-Regular'
    }
});
export default FormPassword;