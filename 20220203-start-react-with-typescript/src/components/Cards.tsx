import useCards from '../hooks/useCards';

export default function Cards() {
  const { cards, addCard } = useCards();

  const handleClick = () => {
    addCard();
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
      >
        click me
      </button>
      {cards.length ? (
        <ul>
          {cards.map((card) => (
            <li key={card.id}>
              <p>{card.title}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
