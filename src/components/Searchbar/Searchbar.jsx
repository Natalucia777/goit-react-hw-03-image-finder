import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Please, enter your query!");
class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = ({ target }) => {
    this.setState( { query: target.value.toLowerCase() });
}
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error(notify);
      return;
    }
    this.props.onSubmit(this.state.query);
  }

  render() {
      return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onImput={this.handleChange}
            value = {this.state.quary}
          />
        </form>
        </header>
      );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
