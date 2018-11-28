import { combineReducers } from 'redux';
import LibraryReducer from './LibraryRducer';

export default combineReducers({
  libraries: LibraryReducer
});