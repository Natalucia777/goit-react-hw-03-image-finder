import React from 'react';
import PropTypes from 'prop-types';

function ImageGalleryItem() {
  return (
    <li class="gallery-item">
  <img src="" alt="" />
</li>
  );
}

ImageGalleryItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

