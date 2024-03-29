import * as S from './styles';
import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HeaderProps = {
    sortType: "UP" | "DOWN"
    onSortPress: () => void
}

const Header = ({ sortType, onSortPress }: HeaderProps) => {
    return (
        <S.MainContainer>
            <S.UserIcon testID='USERICON' source={require("../../assets/UserPhoto.jpg")} />
            <S.TitleText>
                TIPS4YOU
            </S.TitleText>
            <S.OrderButtonContainer
                onPress={onSortPress}
                testID='SORTBUTTON'
            >
                {
                    sortType === "UP"
                        ?
                        <MaterialCommunityIcons testID='UPICON' name="sort-clock-descending" size={32} color="black" />
                        :
                        <MaterialCommunityIcons testID='DOWNICON' name="sort-clock-ascending" size={32} color="black" />
                }
            </S.OrderButtonContainer>
        </S.MainContainer>
    )
}

export default Header;