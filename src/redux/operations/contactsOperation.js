import axios from "axios";
import contactsAction from "../actions/contactsAction";

axios.defaults.baseURL = "http://localhost:2000";

const addContacts = (name, number) => (dispatch) => {
  dispatch(contactsAction.addContactsRequest());

  axios
    .post("/contacts", { name, number })
    .then((response) => {
      dispatch(contactsAction.addContactsSuccess(response.data));
    })
    .catch((error) => dispatch(contactsAction.addContactsError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsAction.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsAction.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsAction.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsAction.removeContactsRequest());
  //   console.log("id revCont", id);
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsAction.removeContactsSuccess(id)))
    .catch((error) => dispatch(contactsAction.removeContactsError(error)));
};

export default {
  addContacts,
  fetchContacts,
  removeContact,
};
