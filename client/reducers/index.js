import { combineReducers } from 'redux';
import makeSchoolReducer from './makeSchoolReducer';
import newSyCombinatorReducer from './newSyCombinatorReducer';
import yCombinatorReducer from './yCombinatorReducer'

const reducers = combineReducers({
  makeSchool: makeSchoolReducer,
  newSyCombinator: newSyCombinatorReducer,
  yCombinator: yCombinatorReducer
});

export default reducers;