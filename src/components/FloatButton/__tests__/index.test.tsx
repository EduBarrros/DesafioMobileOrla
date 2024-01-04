import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FloatButton from '..';

describe("FloatButton", () => {  
    test("The component rendered", () => {
        render(<FloatButton onPress={() => console.log('Click')} />)
    })

    test("The component rendered with PLUSICON", () => {
        const {getByTestId} = render(<FloatButton onPress={() => console.log('Click')} />)

        expect(getByTestId("PLUSICON")).toBeTruthy();
    })

    test("The component has been pressed", () => {

        const onPressMock = jest.fn()

        const {getByTestId} = render(<FloatButton onPress={() => onPressMock()} />)

        fireEvent.press(getByTestId("MAINBUTTON"))

        expect(onPressMock).toHaveBeenCalled()
    })
})
