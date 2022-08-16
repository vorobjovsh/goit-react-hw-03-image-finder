import React from 'react'
import PropTypes from 'prop-types'
import s from './Searchbar.module.css'
import SearchForm from './SearchForm/SearchForm'

function Searchbar({onSubmit}) {
  return (
    <header className={s.Searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar
