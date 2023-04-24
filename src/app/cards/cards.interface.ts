import { CardType } from './cards.enum';

export interface ICard {
    header: string;
    code: string;
    id: number;
    anchor: string;
    cardType: CardType;
    text12?: string;
    text14?: string;
    text16?: string;
    text18?: string;
}
