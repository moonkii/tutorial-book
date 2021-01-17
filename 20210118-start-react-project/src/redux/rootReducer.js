import { combineReducers } from 'redux';

import tutorialReducer from './tutorialSlice';

export default combineReducers({
  tutorial: tutorialReducer,
});
