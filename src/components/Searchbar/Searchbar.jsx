import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchHeader, SearchForm, FormInput, SearchFormButton, ButtonLabel } from './Searchbar.styled';

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
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" class="button">
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <FormInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onImput={this.handleChange}
            value = {this.state.quary}
          />
        </SearchForm>
        </SearchHeader>
      );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
