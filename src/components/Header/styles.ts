import styled from "styled-components";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";

export const MainContainer = styled(View)`
    flex-direction: row;
    width: 100%;
    height: 110px;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #f0f0f0;
    padding-top: 30px;
    ${Platform.OS === 'ios'
    ? `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.2;
    shadow-radius: 4px;
    `
    : `
    elevation: 20;
    shadowColor: '#52006A';
    `}
`

export const UserIcon = styled(Image)`
    height: 48px;
    width: 48px;
    border-radius: 24px;
`

export const TitleText = styled(Text)`
    font-size: 20px;
    font-weight: bold;
`

export const OrderButtonContainer = styled(TouchableOpacity)`
    height: 32px;
    width: 32px;
    align-items: center;
    justify-content: center;
`