import * as React from 'react';
import * as S from './styles';
import { Header, SearchField, TipCard } from '../../components';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {

    const [sortType, setSortType] = React.useState<"UP" | "DOWN">("DOWN")

    const fakedata = [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {
            
        },
        {

        },
        {
            
        },
        {

        },
        {
            
        },
        {

        },
    ]

    return (
        <S.MainContainer>
            <StatusBar style='auto' />
            <Header
                sortType={sortType}
                onSortPress={() => setSortType((prevState) => prevState === "UP" ? 'DOWN' : "UP")}
            />
            <S.ContentContainer>
                <SearchField
                    placeholder='Pesquisar'
                />
                <S.CardList
                    data={fakedata}
                    renderItem={() => <TipCard />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </S.ContentContainer>
        </S.MainContainer>
    )
}

export default HomeScreen;