import { fireEvent, render } from '@testing-library/react';

import Cards from './Cards';

const addCard = jest.fn();

jest.mock('../hooks/useCards', () => ({
  useCards: () => ({
    cards: [
      { id: 0, title: 'My card' },
    ],
    addCard,
  }),
}));

describe('Cards', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a list of card', () => {
    const { container } = render(<Cards />);

    expect(container).toHaveTextContent('My card');
  });

  it.skip('listens for button click event', () => {
    const { getByText } = render(<Cards />);

    fireEvent.click(getByText('Click me!'));

    expect(addCard).toBeCalled();
  });
});
