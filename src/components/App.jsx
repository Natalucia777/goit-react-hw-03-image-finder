import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as API from '../Api/Api'
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { AppBox } from './App.styled';
// import { ErrorMessage } from './App.styled';
class App extends Component {
  //  abortCtrl;
  state = {
    pictures: [],
    query: '',
    currentPage: 1,
    quantityPage: 12,
    error: '',
    isLoading: false,
    isEmpty: false,
    isShowBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, currentPage } = this.state;
    if (
      prevState.query !== query ||
      prevState.currentPage !== currentPage
    ) {
      this.getPictures(query, currentPage);
    }
  }

  async getPictures(query, currentPage) {
    this.setState({ isLoading: true, error: null });
    try {
      const { hits, totalHits } = await API.getComponentImages(query, page);
      if (data.hits.length === 0) {
        this.setState({ isEmpty: true });
        return toast.info('No search images and photos.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } 
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...data.hits],
        page,
        isShowBtn: page < Math.ceil(totalHits / this.state.quantityPage),
        error: null,
      }));
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        this.setState({ error: 'Please, reloading the page!' });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = query => {
    if (this.state.query === query) {
      return;
    }
    this.setState({
      query,
      currentPage: 1,
      pictures: [],
      error: '',
      isEmpty: false,
      isShowBtn: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };
  
render() {
  const { pictures, isLoading, error, isEmpty, isShowBtn } = this.state;
  
    return (
      <AppBox>
        <Searchbar
          onSubmit={this.handleSubmit} />
        {isEmpty && <Text>Please, reloading the page!</Text>}

        <ImageGallery
          pictures={pictures} />
        
        { isShowBtn && <Button onClick={this.loadMore} /> }
        {isLoading && <Loader />}
        
        <ToastContainer
          position="top-right"
          autoClose={3000} />
      </AppBox>
    );
  }
}

export default App;