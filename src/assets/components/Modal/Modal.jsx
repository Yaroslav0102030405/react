import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === 'Escape') {
        console.log('Нажали на ескейп');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackgropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Modal__backgrop" onClick={handleBackgropClick}>
      <div className="Modal__content">{children}</div>
    </div>,
    modalRoot
  );
};

// class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydown);
//   }

//   componentWillUnmount() {
//     console.log(' componentWillUnmount');
//     window.removeEventListener('keydown', this.handleKeydown);
//   }

//   handleKeydown = (e) => {
//     if (e.code === 'Escape') {
//       console.log('Нажали на ескейп');
//       this.props.onClose();
//     }
//   };

//   handleBackgropClick = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Modal__backgrop" onClick={this.handleBackgropClick}>
//         <div className="Modal__content">{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }

export default Modal;
