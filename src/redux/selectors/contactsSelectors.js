import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getContactItems = (state) => state.contacts.items;

const getAlert = (state) => state.contacts.alert;

const getValueFilter = (state) => state.contacts.filter;

const getContactList = createSelector(
  [getContactItems, getValueFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// const getContactList = (state) =>
//   state.contacts.items.filter((contact) =>
//     contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
//   );

export default {
  getLoading,
  getContactItems,
  getAlert,
  getValueFilter,
  getContactList,
};
