import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom';
import s from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);

    const overlay = document.querySelector('#overlay');
    overlay.addEventListener('click', this.handleBackdropClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);

    const overlay = document.querySelector('#overlay');
    overlay.removeEventListener('click', this.handleBackdropClick);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div id='overlay' className={s.Overlay}>
        <div className={s.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal
