import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ImageGalleryItem extends Component {
  render() {
    return (
    <li class="gallery-item">
      <img src={this.props.imageUrl} alt={this.props.id} />
    </li>
  );
  }
}

ImageGalleryItem.propTypes = {
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

