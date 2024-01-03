import * as React from 'react';
import * as S from './styles';
import { Header, SearchField } from '../../components';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {

    const [sortType, setSortType] = React.useState<"UP" | "DOWN">("DOWN")

    return (
        <S.MainContainer>
            <StatusBar style='auto'/>
            <Header
                sortType={sortType}
                onSortPress={() => setSortType((prevState) => prevState === "UP" ? 'DOWN' : "UP")}
            />
            <S.ContentContainer>
                <SearchField 
                    placeholder='Pesquisar'
                />
            </S.ContentContainer>
        </S.MainContainer>
    )
}

export default HomeScreen;