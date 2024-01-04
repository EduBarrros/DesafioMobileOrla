import React from 'react';
import { render } from '@testing-library/react-native';
import FloatButton from '..';
test("O componente renderizou", () => {

    render(<FloatButton onPress={() => null}/>)
})