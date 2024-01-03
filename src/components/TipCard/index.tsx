import * as React from 'react';
import * as S from './styles';


const TipCard = () => {

    const cores = [
        '#668D3C',
        '#613318',
        '#8F3B1B',
        '#B99C8B',
        '#404F24',
    ];

    const indice = Math.floor(Math.random() * cores.length);


    return (
        <S.MainContainer backgroundColor={cores[indice]}>
            <S.HeaderCard>
                <S.HeaderDate>
                    19 Jun
                </S.HeaderDate>
            </S.HeaderCard>
            <S.ContentCard>
                <S.TitleCard>
                    Tip
                </S.TitleCard>
                <S.TextAdivice>
                    iduwhduwhduwhudhwudhwudhuwhduwhduwhdu
                </S.TextAdivice>
            </S.ContentCard>
        </S.MainContainer>
    )
}

export default TipCard;