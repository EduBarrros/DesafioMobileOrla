import * as React from 'react';
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const EmptyState = () => {
    return (
        <S.MainContainer>
            <MaterialCommunityIcons name="emoticon-sad-outline" size={80} color="#c6c6c6" />
            <S.EmptyText>
                You don't have any tips.{'\n'}
                <S.EmptyStrongText>Click the button below to add a new tip.</S.EmptyStrongText>
            </S.EmptyText>
        </S.MainContainer>
    )
}

export default EmptyState;