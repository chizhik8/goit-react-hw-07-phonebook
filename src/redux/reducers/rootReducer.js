import { combineReducers } from 'redux';
import contactsReducer from './contacts';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
