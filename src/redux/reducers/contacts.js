import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import actionTypes from '../constants/contactsActionTypes';
import contactsAction from '../actions/contactsAction';

const itemsReducer = createReducer([], {
  [contactsAction.addContacts]: (state, action) =>
    state.find(
      contact =>
        contact.name.toLowerCase() ===
        action.payload.contact.name.toLowerCase(),
    )
      ? (alert(`${action.payload.contact.name} is already in contacts `),
        [...state])
      : [...state, action.payload.contact],

  [contactsAction.removeContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.contactId),
});

const filterReducer = createReducer('', {
  [contactsAction.addFilter]: (state, action) => action.payload.filter,
});

export default combineReducers({ items: itemsReducer, filter: filterReducer });

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactsAction.addContacts.type:
//       return state.find(
//         contact =>
//           contact.name.toLowerCase() === payload.contact.name.toLowerCase(),
//       )
//         ? (alert(`${payload.contact.name} is already in contacts `), [...state])
//         : [...state, payload.contact];

//     case contactsAction.removeContact.type:
//       return state.filter(contact => contact.id !== payload.contactId);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case contactsAction.addFilter.type:
//       return payload.filter;

//     default:
//       return state;
//   }
// };

// export default combineReducers({ items, filter });
