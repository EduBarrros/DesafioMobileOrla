import styled from "styled-components";
import { View, TextInput, Platform } from "react-native";

export const SearchInput = styled(TextInput)`
    width: 80%;
    height: 50px;
    margin-left: 10%;
    border-radius: 24px;
    border-width: 1px;
    margin-top: 24px;
    border-color: #c1c1c1;
    padding-left: 24px;
    padding-right: 24px;
    background-color: #f0f0f0;
    ${Platform.OS === 'ios'
    ? `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.2;
      shadow-radius: 4px;
    `
    : `
      elevation: 3;
    `}
`