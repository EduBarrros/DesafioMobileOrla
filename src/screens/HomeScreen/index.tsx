import * as S from './styles';
import * as React from 'react';
import { TipApi } from '../../service';
import { ColorSelect } from '../../utils';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { Header, SearchField, TipCard, FloatButton, EmptyState } from '../../components';

const HomeScreen = () => {

    const [sortType, setSortType] = React.useState<"UP" | "DOWN">("DOWN")
    const [tips, setTips] = React.useState([])
    const [filteredTips, setFilteredTips] = React.useState([])
    const [searchText, setSearchtext] = React.useState('')

    React.useEffect(() => {
        sortType === "DOWN"
            ?
            setTips((prevState) => [...prevState.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())])
            :
            setTips((prevState) => [...prevState.sort((a, b) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())])
    }, [sortType])

    React.useEffect(() => {
       const filtered = tips.filter(item => item.advice.toLowerCase().includes(searchText.toLowerCase()));
       
       setFilteredTips(filtered)
    }, [searchText])

    const GetTip = async () => {
        try {
            const responseTip = await TipApi.get('/advice')

            const alreadyExists = tips.find((item) => item.id === responseTip.data.slip.id)

            if (alreadyExists) {
                Toast.show({
                    type: 'info',
                    text1: 'Opss...',
                    text2: "You already have this tip, try again."
                });
            } else {

                const TipBody = {
                    ...responseTip.data.slip,
                    backgroundcolor: ColorSelect(),
                    createdAt: new Date()
                }

                setTips((prevstate) => [TipBody, ...prevstate])

                Toast.show({
                    type: 'success',
                    text1: 'Tip created!',
                    text2: "You can take a look below."
                });
            }

        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Houston we have a problem!',
                text2: "You can try again in a few seconds."
            });
        }
    }

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
                    onChangeText={(text: string) => setSearchtext(text)}
                />
                <S.CardList
                    data={searchText !== '' ? filteredTips : tips}
                    renderItem={(tip: any) => <TipCard tip={tip} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <EmptyState />}
                />
            </S.ContentContainer>
            <FloatButton onPress={() => GetTip()} />
        </S.MainContainer>
    )
}

export default HomeScreen;