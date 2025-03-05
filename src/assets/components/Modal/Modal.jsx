import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    console.log(' componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.code === 'Escape') {
      console.log('Нажали на ескейп');
      this.props.onClose();
    }
  };

  handleBackgropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backgrop" onClick={this.handleBackgropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
