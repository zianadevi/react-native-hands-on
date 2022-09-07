import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../shared/context/ThemeContext"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from "react-native-gesture-handler";

const Item = ({productName, idx, onDelete, refRow, closeRow}) => {
    const theme = useTheme();
    const styles = styling(theme);
    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange : [0, 1]
        });
        return (
            <TouchableOpacity onPress={onDelete}>
                <Animated.View style={[styles.deleteBox, {transform: [{scale: scale}]}]} >
                    <MaterialCommunityIcons name="delete-forever" size={24} color="white " />
                </Animated.View>
            </TouchableOpacity>
        )
    }
    return (
        <GestureHandlerRootView>
            <Swipeable
                renderLeftActions={leftSwipe}
                ref={ref => refRow(idx, ref)} 
                onSwipeableWillOpen={closeRow}
            >
                <View style={styles.item} accessibilityHint='product-items'>
                    <Text style={styles.itemText}> {productName} </Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const styling = (theme) => StyleSheet.create({
    item : {
        padding: theme.spacing.s,
        marginVertical: theme.spacing.xs,
        marginHorizontal: theme.spacing.s,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.primary
    },
    itemText: {
        fontSize: 14,
        color: theme.colors.primary,
        fontFamily: 'Poppins-Regular'
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        flex: 1
    },
})

export default Item;