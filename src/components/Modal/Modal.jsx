import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modalRoot');
class Modal extends Component {
  // state = {

  // };

  render() {
    return createPortal(
      <div class="overlay">
        <div class="modal">
          <img src={this.props.image} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Modal;