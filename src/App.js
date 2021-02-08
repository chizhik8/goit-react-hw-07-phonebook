import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import contactsOperation from "../src/redux/operations/contactsOperation";
import contactsSelectors from "./redux/selectors/contactsSelectors";

export class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    // console.log("App alert:", this.props.isAlertContacts);
    return (
      <div>
        <ContactForm />
        {this.props.contacts.length > 0 ? (
          <Filter />
        ) : (
          <h2>Contact list is empty! Please add contact!</h2>
        )}
        {this.props.isLoadingContacts && <h1>Loading contacts......</h1>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  contacts: contactsSelectors.getContactItems(state),
  isAlertContacts: contactsSelectors.getAlert(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperation.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
