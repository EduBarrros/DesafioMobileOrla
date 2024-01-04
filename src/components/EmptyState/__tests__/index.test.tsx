import React from 'react';
import { render } from '@testing-library/react-native';
import EmptyState from '..';

describe("EmptyState", () => {  
    test("The component rendered", () => {
        render(<EmptyState />)
    })
})
