import * as React from 'react';
import * as S from './styles';

type SearchInput = {
    placeholder?: string
}

const SearchField = ({ placeholder }: SearchInput) => {
    return (
        <S.SearchInput 
            placeholder={placeholder}
            cursorColor={'#636363'}
        />
    )
}

export default SearchField;