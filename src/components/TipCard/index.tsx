import * as React from 'react';
import * as S from './styles';

type TipCardProps = {
    tip: any
}


const TipCard = ({ tip }: TipCardProps) => {

    return (
        <S.MainContainer backgroundColor={tip.item.backgroundcolor}>
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
                    {tip?.item.advice}
                </S.TextAdivice>
            </S.ContentCard>
        </S.MainContainer>
    )
}

export default TipCard;