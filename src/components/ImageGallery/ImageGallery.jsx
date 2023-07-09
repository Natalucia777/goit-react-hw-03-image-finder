import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';

class ImageGallery extends Component {
  state = {
    showModal: false,
    showImage: null,
  };



  
  render() {
    const { showModal, showImage } = this.state;
    return (
      <div>
        <ul class="gallery">
          <ImageGalleryItem
            key={shortid.generate()}
            imageUrl={ }
            id={ }
          />
        </ul>
        if ({showModal && showImage}) {
          <Modal image={ this.showImage } />
        }
      </div>
    );
  }
}

ImageGallery.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ImageGallery;
