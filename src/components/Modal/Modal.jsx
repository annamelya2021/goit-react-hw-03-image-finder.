import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.modalToggle(null);
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.modalToggle(null);
    }
  };

  render() {
    return createPortal(
        <div className={css.Overlay} onClick={this.handleBackdropClick}>
            <div className={css.Modal}>
                <img src={this.props.link} alt=""></img>
            </div>
        </div>,
      modalRoot,
    );
  }
}

export { Modal }