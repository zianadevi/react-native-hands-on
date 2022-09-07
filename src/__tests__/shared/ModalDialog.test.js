import {render, screen} from "@testing-library/react-native";
import { useState } from "react";
import { Text, View } from "react-native";
import ModalDialog from "../../features/shared/components/ModalDialog";

jest.useFakeTimers();
describe('Modal Dialog', () => {
    test('Successfully render', () => {
        render(<ModalDialog visible><Text>Dummy Modal</Text></ModalDialog>)
        expect(screen.getByText(/Dummy/)).toBeTruthy();
    });
    test('Successfully auto close', () => {
        const ModalTestHelper = () => {
            const {modalVisible, setModalVisible} = useState(true);
            return (
                <View>
                    <ModalDialog visible={modalVisible} onPress={() => setModalVisible(false)}>
                        <Text>Dummy Modal</Text>
                    </ModalDialog>
                </View>
            )
        }
        render(<ModalTestHelper/>);
        const viewPressable = screen.getAllByA11yHint(/modal/);
        expect(viewPressable).toBeTruthy();
    });
})