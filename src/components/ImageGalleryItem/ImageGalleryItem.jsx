import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImgItem, ImgItemImg } from './ImageGalleryItem.styled';
class ImageGalleryItem extends Component {
  render() {
    return (
    <ImgItem>
      <ImgItemImg src={this.props.imageUrl} alt={this.props.id} />
    </ImgItem>
  );
  }
}

ImageGalleryItem.propTypes = {
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

