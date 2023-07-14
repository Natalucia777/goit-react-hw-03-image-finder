import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import { ImageGalleryList } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    showModal: false,
    showImage: null,
  };

  componentDidMount() {
  document.addEventListener('click', e => {
      if (e.target.nodeName !== 'IMG') {
        this.setState({ showModal: false });
        return;
      } else {
        let picture = this.props.pictures.filter(obj => {
          return obj.id === parseInt(e.target.alt);
        });
        this.setState({ showImage: picture[0].largeImageURL });
      }
    });
} 
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal, showImage } = this.state;
    return (
      <div>
        <ImageGalleryList
          onClick={this.toggleModal}>
          {this.props.pictures.map(img => {
            return (  
          <ImageGalleryItem
            key={shortid.generate()}
            smallImgURL={img.webformatURL}
            id={img.id}
              />
            );
          })}
        </ImageGalleryList>
        if ({showModal && showImage}) {
          <Modal onClose={this.toggleModal}  image={this.showImage } />
        }
      </div>
    );
  }
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
