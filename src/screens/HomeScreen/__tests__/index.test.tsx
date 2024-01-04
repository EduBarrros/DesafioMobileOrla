import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '..';

describe("EmptyState", () => {  
    test("The component rendered", () => {
        render(<HomeScreen />)
    })
})
