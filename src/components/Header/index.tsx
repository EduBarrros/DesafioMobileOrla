import * as React from 'react';
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

type HeaderProps = {
    sortType: "UP" | "DOWN"
    onSortPress: () => void
}

const Header = ({ sortType, onSortPress }: HeaderProps) => {
    return (
        <S.MainContainer>
            <S.UserIcon source={require("../../assets/UserPhoto.jpg")}/>
            <S.TitleText>
                TIPS4YOU
            </S.TitleText>
            <S.OrderButtonContainer
                onPress={onSortPress}
            >
                {
                    sortType === "UP"
                        ?
                        <MaterialCommunityIcons name="sort-clock-ascending" size={32} color="black" />
                        :
                        <MaterialCommunityIcons name="sort-clock-descending" size={32} color="black" />
                }
            </S.OrderButtonContainer>
        </S.MainContainer>
    )
}

export default Header;