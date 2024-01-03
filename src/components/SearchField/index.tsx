import * as React from 'react';
import * as S from './styles';

type SearchInput = {
    placeholder?: string
    onChangeText?: any
}

const SearchField = ({ placeholder, onChangeText }: SearchInput) => {
    return (
        <S.SearchInput 
            placeholder={placeholder}
            cursorColor={'#636363'}
            onChangeText={onChangeText}
        />
    )
}

export default SearchField;