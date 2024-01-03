import styled from "styled-components";
import { Text, View } from "react-native";

interface CardProps {
    backgroundColor?: string;
}

export const MainContainer = styled(View)<CardProps>`
    height: 150px;
    width: 155px;
    background-color: ${(props) => props.backgroundColor};
    margin-right: 10%;
    margin-bottom: 32px;
    border-radius: 8px;
    padding: 8px;
`

export const HeaderCard = styled(View)`
    width: 100%;
    flex-direction: row; 
    justify-content: flex-end;
    margin-bottom: 8px;
`

export const HeaderDate = styled(Text)`
    color: #ffffff;
    font-size: 12px;
`

export const ContentCard = styled(View)`

`

export const TitleCard = styled(Text)`
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
`

export const TextAdivice = styled(Text)`
    color: #ffffff;
    font-size: 12px;
` 