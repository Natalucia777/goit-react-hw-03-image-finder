import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    URL: 'https://pixabay.com/api',
    API_KEY: '36094261-707a3f1df60011e058a78caa9',
    pictures: [],
    
  };


  render() {
    return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
      <Searchbar />   
     
    </div>
  );
  }
}
