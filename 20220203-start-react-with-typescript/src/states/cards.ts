import { atom } from 'recoil';

export interface Card {
  id: number;
  title: string;
}

export const cardsState = atom<Card[]>({
  key: 'cardsState',
  default: [],
});
