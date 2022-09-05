import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../shared/context/ThemeContext"
import {FontAwesome} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const MenuItem = ({product}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TouchableOpacity style={styles.menuContainer}>
            <View style={styles.menuOval}>
                <FontAwesome name={product.icon} size={32} color='white' />
            </View>
            <Text style={styles.textMenu}>{product.menu}</Text>
        </TouchableOpacity>
    )
}

const styling = (theme) => StyleSheet.create({
    menuOval : {
        width: 64,
        height: 64,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        borderRadius: 32,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    menuContainer : {
        alignItems : 'center'
    },
    textMenu : {
        color: theme.colors.primary,
        fontFamily: 'Poppins-Regular'
    }
})

export default MenuItem;