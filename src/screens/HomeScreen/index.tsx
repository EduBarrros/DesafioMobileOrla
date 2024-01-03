import * as React from 'react';
import * as S from './styles';
import { Header, SearchField, TipCard, FloatButton, EmptyState} from '../../components';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {

    const [sortType, setSortType] = React.useState<"UP" | "DOWN">("DOWN")
    const [tips, setTips] = React.useState([])

    return (
        <S.MainContainer>
            <StatusBar style='auto' />
            <Header
                sortType={sortType}
                onSortPress={() => setSortType((prevState) => prevState === "UP" ? 'DOWN' : "UP")}
            />
            <S.ContentContainer>
                <SearchField
                    placeholder='Search'
                />
                <S.CardList
                    data={tips}
                    renderItem={() => <TipCard />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <EmptyState />}
                />
            </S.ContentContainer>
            <FloatButton />
        </S.MainContainer>
    )
}

export default HomeScreen;