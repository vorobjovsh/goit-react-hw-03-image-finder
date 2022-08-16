import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './SearchForm.module.css'

export class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    imageCategory: ''
  };

  handleNameImage = e => {
    this.setState({ imageCategory: e.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.imageCategory);
    this.setState({ imageCategory: '' });
  };

  render() {
    return (
      <form className={s.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          onChange={this.handleNameImage}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    )
  }
}

export default SearchForm
