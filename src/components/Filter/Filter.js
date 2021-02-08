import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsAction from "../../redux/actions/contactsAction";
import contactsSelectors from "../../redux/selectors/contactsSelectors";

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string,
  };

  handleInput = (e) => {
    this.props.onInputFilter(e.target.value);
  };
  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input type="text" onChange={this.handleInput} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: contactsSelectors.getValueFilter(state),
});

const mapDispatchToProps = {
  onInputFilter: contactsAction.addFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
