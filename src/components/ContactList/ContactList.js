import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import contactsOperation from "../../redux/operations/contactsOperation";
import contactsSelectors from "../../redux/selectors/contactsSelectors";

import "./ContactList.css";

function ContactList({ contacts, onRemoveContact }) {
  return (
    <div>
      <TransitionGroup component="ul">
        {contacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={250} classNames="contacts">
            <li>
              {" "}
              {contact.name}: {contact.number}
              <button type="button" onClick={() => onRemoveContact(contact.id)}>
                x
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContactList(state),
});

const mapDispatchToProps = {
  onRemoveContact: contactsOperation.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
