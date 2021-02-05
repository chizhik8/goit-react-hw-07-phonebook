import axios from "axios";
import contactsAction from "../actions/contactsAction";

const addContacts = (name, number) => (dispatch) => {
  dispatch(contactsAction.addContactsRequest());
  //   console.log("addCont", name, number);
  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((response) => {
      //   console.log("response:", response);
      dispatch(contactsAction.addContactsSuccess(response.data));
    })
    .catch((error) => dispatch(contactsAction.addContactsError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsAction.fetchContactsRequest());
  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => dispatch(contactsAction.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsAction.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsAction.removeContactsRequest());
  //   console.log("id revCont", id);
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(contactsAction.removeContactsSuccess(id)))
    .catch((error) => dispatch(contactsAction.removeContactsError(error)));
};

export default {
  addContacts,
  fetchContacts,
  removeContact,
};
