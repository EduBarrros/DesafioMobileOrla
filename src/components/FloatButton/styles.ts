import { Platform, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const MainContainer = styled(TouchableOpacity)`
    position: absolute;
    bottom: 40px;
    right: 5%;
    width: 72px;
    height: 72px;
    border-Radius: 36px;
    background-color: #f0f0f0;
    justify-content: center;
    align-items: center;
    ${Platform.OS === 'ios'
    ? `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.6;
      shadow-radius: 4px;
    `
    : `
      elevation: 8;
    `}
`