import React, { Component } from 'react';
//import Modal from 'react-modal';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modalRoot');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      return this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay>
        <ModalImg>
          <img src={this.props.pictures} alt="" />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  pictures: PropTypes.string.isRequired,
};

export default Modal;