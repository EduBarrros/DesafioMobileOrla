import * as React from 'react';
import * as S from './styles';


const TipCard = () => {

    const cores = [
        '#FF5733',
        '#336BFF',
        '#3333FF',
        '#2E8B57',
        '#8A2BE2',
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