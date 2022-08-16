import React from 'react'
import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

function ImageGalleryItem({ webformatURL, largeImageURL, clickImg }) {

  return (
    <li className={s.ImageGalleryItem} onClick={() => clickImg(largeImageURL)}>
      <img className={s.ImageGalleryItemImage} src={webformatURL} alt="" />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  clickImg: PropTypes.func.isRequired,
}

export default ImageGalleryItem
