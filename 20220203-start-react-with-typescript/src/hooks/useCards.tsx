import { useRecoilState } from 'recoil';

import { cardsState } from '../states/cards';

export default function useCards() {
  const [cards, setCards] = useRecoilState(cardsState);

  const addCard = () => {
    setCards([
      {
        id: 1,
        title: 'Fixed title',
      },
      ...cards,
    ]);
  };

  return {
    cards,
    addCard,
  };
}
