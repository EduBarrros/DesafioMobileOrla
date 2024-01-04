import React from 'react';
import { render } from '@testing-library/react-native';
import SearchField from '..';

describe("SearchField", () => {  
    test("The component rendered", () => {
        render(<SearchField placeholder='Search' onChangeText={() => console.log('Change')} />)
    })
})
