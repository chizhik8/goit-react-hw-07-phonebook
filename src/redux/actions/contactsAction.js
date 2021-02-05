import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

// ---------------Add contacts--------------------------
const addContactsRequest = createAction("contacts/addRequest");
const addContactsSuccess = createAction("contacts/addSuccess");
const addContactsError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

// const addContacts = createAction("contacts/add", (name, number) => ({
//   payload: { contact: { id: uuidv4(), name, number } },
// }));

// ---------------Remove contacts--------------------------

const removeContactsRequest = createAction("contacts/removeRequest");
const removeContactsSuccess = createAction("contacts/removeSuccess");
const removeContactsError = createAction("contacts/removeError");

// const removeContact = createAction("contacts/remove", (contactId) => ({
//   payload: { contactId },
// }));

// ---------------Filter--------------------------
const addFilter = createAction("contacts/addFilter", (filter) => ({
  payload: { filter },
}));

// --------------------export---------------------------------

export default {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsSuccess,
  removeContactsRequest,
  removeContactsError,
  // addContacts,
  // removeContact,
  addFilter,
};
