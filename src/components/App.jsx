import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    URL: 'https://pixabay.com/api',
    API_KEY: '36094261-707a3f1df60011e058a78caa9',
    pictures: [],
    error: '',
    query: '',
    currentPage: 1,
  };

  getImages = () => {
    const { URL, API_KEY, query, currentPage } = this.state;
    const response = axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: currentPage,
      },
    });

      // .then(function (response) {
      //   // handle success
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      // })
      // .finally(function () {
      //   // always executed
      // });
    return response.data;
  }
  

  
  render() {
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <Searchbar />
        <Button />
        <Loader />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
          // theme="light"
          />
      </div>
    );
  }
}

export default App;
