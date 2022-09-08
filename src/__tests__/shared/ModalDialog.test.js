import {fireEvent, render, screen} from "@testing-library/react-native";
import { useState } from "react";
import { Text } from "react-native";
import ModalDialog from "../../features/shared/components/ModalDialog";

jest.useFakeTimers();
describe('Modal Dialog', () => {
    test('Successfully render', () => {
        render(<ModalDialog visible><Text>Dummy Modal</Text></ModalDialog>)
        expect(screen.getByText(/Dummy/)).toBeTruthy();
    });
    test('Successfully close when user click on any screen', () => {
        const ModalTestHelper = () => {
            const [modalVisible, setModalVisible] = useState(true);
            return(
                <ModalDialog visible={modalVisible} onPress={() => setModalVisible(false)}>
                    <Text>Dummy Modal</Text>
                </ModalDialog>
            )
        }
        render(<ModalTestHelper/>);
        const viewPressable = screen.getByA11yHint(/modal/)
        fireEvent.press(viewPressable);
        expect(screen.queryByText(/Dummy/)).toBeNull()
    })
    test('Successfully auto close', () => {
        const mockOnClose = jest.fn()
        render(<ModalDialog visible isAutoClose onPress={mockOnClose}><Text>Dummy Modal</Text></ModalDialog>);
        jest.runAllTimers();
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
})