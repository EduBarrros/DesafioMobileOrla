import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '..';

describe("Header", () => {  
    test("The component rendered", () => {
        render(<Header sortType='UP' onSortPress={() => console.log('Click')}/>)
    })
})
