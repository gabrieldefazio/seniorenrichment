import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import campi from './campi';
import students from './students';
import newCampusEntry from './newCampusEntry'
import newStudentEntry from './newStudentEntry'

const reducer = combineReducers({
  campi,
  students,
  newCampusEntry,
  newStudentEntry
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;

// export action creators
export * from './campi';
export * from './students';
export * from './newCampusEntry';
export * from './newStudentEntry';

