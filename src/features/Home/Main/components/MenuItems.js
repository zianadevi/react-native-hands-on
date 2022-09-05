import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../shared/context/ThemeContext"
import {FontAwesome} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const MenuItem = ({product}) => {
    const theme = useTheme();
    const styles = styling(theme);
    const renderMenuItem = () => {
        if (product.id !== -1) {
            return (
                <TouchableOpacity style={styles.menuContainer}>
                    <View style={[styles.baseView, styles.menuOval]}>
                        <FontAwesome name={product.icon} size={32} color='white' />
                    </View>
                    <Text style={styles.textMenu}>{product.menu}</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <View style={styles.baseView}></View>
            )
        }
    }

    return (
        <>
            {renderMenuItem()}
        </>
    )
}

const styling = (theme) => StyleSheet.create({
    baseView : {
        width: 64,
        height: 64,
        margin: theme.spacing.s
    },
    menuOval : {
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