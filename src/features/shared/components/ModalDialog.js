import { useEffect } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

const ModalDialog = ({visible = true, children, isAutoClose = false, onPress}) => {
    useEffect(() => {
        if (isAutoClose) {
            const autoClose = setTimeout(onPress, 3000);
            return() => {
                clearTimeout(autoClose)
            };
        }
    });
    
    return (
        <View style={styles.mainContainer}>
            <Modal
                visible={visible}
                animationType='slide'
                transparent={true}
            >
                <Pressable accessibilityHint="modal" style={styles.mainContainer} onPress={onPress}>
                    <View style={styles.modalContainer}>
                        {children}
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '50%',
        backgroundColor: 'white',
        alignSelf: 'stretch',
        padding: 32
    }
})

export default ModalDialog;