import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  render() {
    <header class="searchbar">
      <form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value = {this.state.quary}
        />
      </form>
    </header>;
  }
}

export default Searchbar;
