import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImg } from './ImageGalleryItem.styled';
class ImageGalleryItem extends Component {
  render() {
    return (
    <ImgGalleryItem>
      <ImgGalleryItemImg src={this.props.imageUrl} alt={this.props.id} />
    </ImgGalleryItem>
  );
  }
}

ImageGalleryItem.propTypes = {
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

