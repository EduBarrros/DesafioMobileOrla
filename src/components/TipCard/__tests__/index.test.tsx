import React from 'react';
import { render } from '@testing-library/react-native';
import TipCard from '..';

describe("TipCard", () => {  
    test("The component rendered", () => {
        render(<TipCard tip={{item:{id: 1, advice: "Teste advice", backgroundcolor: '#000'}}} />)
    })

    test("The component demonstrated the past advice", () => {
        const {getByText} = render(<TipCard tip={{item:{id: 1, advice: "Teste advice", backgroundcolor: '#000'}}} />)

        expect(getByText("Teste advice")).toBeTruthy();
    })
})
