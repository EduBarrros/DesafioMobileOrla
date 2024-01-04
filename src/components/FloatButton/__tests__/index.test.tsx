import React from 'react';
import { render } from '@testing-library/react-native';
import FloatButton from '..';

describe("FloatButton", () => {
    test("O componente renderizou", () => {
        render(<FloatButton onPress={() => null} />)
    })
})
