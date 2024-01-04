import * as S from './styles';
import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type FloatButtonProps = {
    onPress: () => void
    disabled: boolean
    loading: boolean
}

const FloatButton = ({ onPress, disabled, loading }: FloatButtonProps) => {

    return (
        <S.MainContainer
            activeOpacity={0.9}
            onPress={onPress}
            testID='MAINBUTTON'
            disabled={disabled}
        >
            {
                loading
                    ?
                    <ActivityIndicator color={'#636363'}/>
                    :
                    <FontAwesome5 testID="PLUSICON" name="plus" size={22} color="black" />
            }
        </S.MainContainer>
    )
}

export default FloatButton;