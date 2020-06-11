import reducer, {
  reset,
} from './tutorialSlice';

describe('tutorialSlice', () => {
  describe('reset', () => {
    it('resets states', () => {
      const state = reducer({
        myState: '',
      }, reset());

      expect(state.myState).toEqual('');
    });
  });
});
