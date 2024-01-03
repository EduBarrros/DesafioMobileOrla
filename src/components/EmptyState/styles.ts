import { View, Text } from "react-native";
import styled from "styled-components";

export const MainContainer = styled(View)`
    justify-content: center;
    align-items: center;
    width: 95%;
    padding-top: 50%;
`;

export const EmptyText = styled(Text)`
    color: #c6c6c6;
    font-weight: normal;
    font-size: 18px;
    margin-top: 16px;
    text-align: center;
`

export const EmptyStrongText = styled(Text)`
    color: #c6c6c6;
    font-weight: bold;
    font-size: 18px;
`