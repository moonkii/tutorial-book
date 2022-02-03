import { renderHook, act } from '@testing-library/react-hooks';

import { RecoilRoot } from 'recoil';

import useCards from './useCards';

describe('useCards', () => {
  const wrapper = ({ children }: { children: any }) => (
    <RecoilRoot>{children}</RecoilRoot>
  );

  const render = () => renderHook(() => useCards(), { wrapper });

  it('uses a list of card', () => {
    const { result } = render();

    expect(result.current.cards).toHaveLength(0);
  });

  describe('addCard', () => {
    it('adds a new card', () => {
      const { result } = render();

      act(() => {
        result.current.addCard();
      });

      expect(result.current.cards).toHaveLength(1);
    });
  });
});
