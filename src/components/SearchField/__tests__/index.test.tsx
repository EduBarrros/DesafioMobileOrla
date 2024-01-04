import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchField from '..';

describe('SearchField', () => {
  it('The component rendered', () => {
    const { getByPlaceholderText } = render(<SearchField placeholder="Search" />);

    const input = getByPlaceholderText('Search');

    expect(input).toBeTruthy();
  });

  it('calls onChangeText when text is changed', () => {
    const onChangeTextMock = jest.fn();

    const { getByPlaceholderText } = render(<SearchField placeholder="Search" onChangeText={onChangeTextMock} />);
    
    const input = getByPlaceholderText('Search');

    fireEvent.changeText(input, 'new text');

    expect(onChangeTextMock).toHaveBeenCalledWith('new text');
  });
});
