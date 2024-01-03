import * as React from 'react';
import * as S from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 

const FloatButton = () => {
    return(
        <S.MainContainer
            activeOpacity={0.9}
        >
            <FontAwesome5 name="plus" size={22} color="black" />
        </S.MainContainer>
    )
}

export default FloatButton;