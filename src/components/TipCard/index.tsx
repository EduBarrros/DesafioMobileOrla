import * as React from 'react';
import * as S from './styles';
import { FormatDate } from '../../utils';

type TipCardProps = {
    tip: {
        item: {
            id: number,
            advice: string,
            backgroundcolor: string
        }
    }
}

const TipCard = ({ tip }: TipCardProps) => {

    const { backgroundcolor, advice } = tip.item

    return (
        <S.MainContainer backgroundColor={backgroundcolor}>
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
                    {advice}
                </S.TextAdivice>
            </S.ContentCard>
        </S.MainContainer>
    )
}

export default TipCard;