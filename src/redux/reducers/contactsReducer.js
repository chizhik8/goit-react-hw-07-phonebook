import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import actionTypes from '../constants/contactsActionTypes';
import contactsAction from "../actions/contactsAction";

// ----------------------Contacts---------------------------------------

const itemsReducer = createReducer([], {
  [contactsAction.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsAction.addContactsSuccess]: (state, action) => {
    return state.find(
      (contact) =>
        contact.name.toLowerCase() === action.payload.name.toLowerCase()
    )
      ? alert(`${action.payload.name} is already in contacts `)
      : [...state, action.payload];
  },

  [contactsAction.removeContactsSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

// ----------------Filter--------------------------------------------
const filterReducer = createReducer("", {
  [contactsAction.addFilter]: (state, action) => action.payload.filter,
});

// ----------------Loader-------------------------------------------

const loadingReducer = createReducer(false, {
  [contactsAction.fetchContactsRequest]: () => true,
  [contactsAction.addContactsRequest]: () => true,
  [contactsAction.removeContactsRequest]: () => true,
  [contactsAction.addContactsSuccess]: () => false,
  [contactsAction.fetchContactsSuccess]: () => false,
  [contactsAction.removeContactsSuccess]: () => false,
  [contactsAction.addContactsError]: () => false,
  [contactsAction.fetchContactsError]: () => false,
  [contactsAction.removeContactsError]: () => false,
});

// ---------------------alert------------------------------

const alertReducer = createReducer(false, {});

// ---------------------------export---------------------------------
export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  alert: alertReducer,
});
