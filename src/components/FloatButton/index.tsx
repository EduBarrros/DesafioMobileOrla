import * as React from 'react';
import * as S from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Toast from 'react-native-toast-message';

type FloatButtonProps = {
    onPress: () => void
}

const FloatButton = ({ onPress }: FloatButtonProps) => {

    return(
        <S.MainContainer
            activeOpacity={0.9}
            onPress={onPress}
            testID='MAINBUTTON'
        >
            <FontAwesome5 testID="PLUSICON" name="plus" size={22} color="black" />
        </S.MainContainer>
    )
}

export default FloatButton;