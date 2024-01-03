import * as React from 'react';
import * as S from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

type HeaderProps = {
    sortType: "UP" | "DOWN"
    onSortPress: () => void
}

const Header = ({ sortType, onSortPress }: HeaderProps) => {
    return (
        <S.MainContainer>
            <S.UserIcon source={require("../../assets/UserPhoto.jpg")}/>
            <S.TitleText>
                NOTE APP
            </S.TitleText>
            <S.OrderButtonContainer
                onPress={onSortPress}
            >
                {
                    sortType === "UP"
                        ?
                        <FontAwesome5 name="sort-alpha-up" size={24} color="black" />
                        :
                        <FontAwesome5 name="sort-alpha-down" size={24} color="black" />
                }
            </S.OrderButtonContainer>
        </S.MainContainer>
    )
}

export default Header;