import React from 'react'
import PropTypes from 'prop-types'
import s from './Button.module.css'

function Button({addPictures}) {
  return (
    <button className={s.Button} onClick={addPictures}>Load more</button>
  )
}

Button.propTypes = {
  addPictures: PropTypes.func.isRequired,
}

export default Button
