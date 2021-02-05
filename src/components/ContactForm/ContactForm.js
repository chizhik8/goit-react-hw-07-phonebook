import React, { Component } from "react";
// import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import contactsOperation from "../../redux/operations/contactsOperation";
import PropTypes from "prop-types";
import "./contactform.css";

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
  };

  state = {
    name: "",
    number: "",
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onAddContacts(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        {/* <CSSTransition in={true} appear timeout={500} classNames="Logo"> */}
        <h1>Phonebook</h1>
        {/* </CSSTransition> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput}
              name="name"
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={this.state.number}
              onChange={this.handleInput}
              name="number"
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddContacts: contactsOperation.addContacts,
};

export default connect(null, mapDispatchToProps)(ContactForm);
