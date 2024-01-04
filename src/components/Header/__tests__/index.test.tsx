import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '..';

describe("Header", () => {  
    test("The component rendered", () => {
        render(<Header sortType='UP' onSortPress={() => console.log('Click')}/>)
    })

    test("The component rendered with UPICON", () => {
        const {getByTestId} = render(<Header sortType='UP' onSortPress={() => console.log('Click')}/>)

        expect(getByTestId("UPICON")).toBeTruthy();
    })

    test("The component rendered with DOWNICON", () => {
        const {getByTestId} = render(<Header sortType='DOWN' onSortPress={() => console.log('Click')}/>)

        expect(getByTestId("DOWNICON")).toBeTruthy();
    })

    test("The component rendered with USERICON", () => {
        const {getByTestId} = render(<Header sortType='UP' onSortPress={() => console.log('Click')}/>)

        expect(getByTestId("USERICON")).toBeTruthy();
    })

    test("The component button has been pressed", () => {

        const onPressMock = jest.fn()

        const {getByTestId} = render(<Header sortType='UP' onSortPress={() => onPressMock}/>)

        fireEvent.press(getByTestId("SORTBUTTON"))

        expect(onPressMock).toHaveBeenCalled()
    })
})
