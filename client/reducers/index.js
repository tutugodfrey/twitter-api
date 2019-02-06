import { combineReducers } from 'redux';
import makeSchoolReducer from './makeSchoolReducer';
import newSyCombinatorReducer from './newSyCombinatorReducer';
import yCombinatorReducer from './yCombinatorReducer';
import settingsReducer from './settingsReducer';

const reducers = combineReducers({
  makeSchool: makeSchoolReducer,
  newSyCombinator: newSyCombinatorReducer,
  yCombinator: yCombinatorReducer,
  settings: settingsReducer,
});

export default reducers;
