import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modalRoot');
class Modal extends Component {
  // state = {

  // };

  render() {
    retutn createPortal(
      <div class="overlay">
        <div class="modal">
          <img src="{ }" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  ,
};

export default Modal;