import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FloatButton from '..';

describe("FloatButton", () => {  
    test("The component rendered", () => {
        render(<FloatButton loading={false} disabled={false} onPress={() => console.log('Click')} />)
    })

    test("The component rendered with PLUSICON", () => {
        const {getByTestId} = render(<FloatButton loading={false} disabled={false} onPress={() => console.log('Click')} />)

        expect(getByTestId("PLUSICON")).toBeTruthy();
    })

    test("The component has been pressed", () => {

        const onPressMock = jest.fn()

        const {getByTestId} = render(<FloatButton loading={false} disabled={false} onPress={() => onPressMock()} />)

        fireEvent.press(getByTestId("MAINBUTTON"))

        expect(onPressMock).toHaveBeenCalled()
    })

    test("The component has been disabled", () => {

        const onPressMock = jest.fn()

        const {getByTestId} = render(<FloatButton loading={false} disabled={true} onPress={() => onPressMock()} />)

        fireEvent.press(getByTestId("MAINBUTTON"))

        expect(onPressMock).not.toHaveBeenCalled()
    })

    test("The component are loading", () => {

        const onPressMock = jest.fn()

        const {getByTestId} = render(<FloatButton loading={true} disabled={false} onPress={() => onPressMock()} />)

        expect(getByTestId("LOADING")).toBeTruthy();
    })
})
