import React from 'react';
import { render } from '@testing-library/react-native';
import FloatButton from '..';

describe("FloatButton", () => {  
    test("The component rendered", () => {
        render(<FloatButton onPress={() => console.log('Click')} />)
    })
})