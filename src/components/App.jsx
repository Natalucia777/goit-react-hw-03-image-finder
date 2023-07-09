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
import { AppBox } from './App.styled';
import { ErrorMessage } from './App.styled';



const BASE_URL = axios.defaults.baseURL = "https://pixabay.com/api";
const API_KEY = '36094261-707a3f1df60011e058a78caa9';
const quantityPage = 12;

async function getComponentImages (query, page, loading) {
    const response = await axios.get(BASE_URL, {
      loading,
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: quantityPage,
        page: page,
      },
    });
    return response.data;
  }
class App extends Component {
   abortCtrl;
  state = {
    // URL: 'https://pixabay.com/api',
    // API_KEY: '36094261-707a3f1df60011e058a78caa9',
    pictures: [],
    query: '',
    currentPage: 1,
    quantityPage: 12,
    error: '',
    isLoading: false,
    isLastPage: false,
  };

  async componentDidMount() {
    const response = await axios.get("/search?query=react");
    this.setState({ pictures: response.data.hits });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.getPictures();
    }
  }

  async getPictures() {
    const { query, currentPage } = this.state;
    if (this.abortCtrl) {
      this.abortCtrl.abort();
    }
    this.abortCtrl = new AbortController();
    try {
      this.setState({ isLoading: true });
      const data = await getComponentImages(
        query,
        currentPage,
        this.abortCtrl.loading
      );
    if (data.hits.length === 0) {
        return toast.info('No search images and photos.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } 
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...data.hits],
        isLastPage:
          prevState.pictures.length + data.hits.length >= data.totalHits,
        error: null,
      }));
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        this.setState({ error: error.message });
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
      isLastPage: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };
render() {
  const { pictures, isLoading, error, isLastPage } = this.state;
    return (
      <AppBox>
        <Searchbar
          onSubmit={this.handleSubmit} />
        {error && <ErrorMessage>
          Error: {error}
        </ErrorMessage>}
        <ImageGallery
          pictures={pictures} />
        {!isLoading && pictures.length > 0 && !isLastPage && (
        <Button onClick={this.loadMore} />)}
        {isLoading && <Loader />}
        <ToastContainer
          position="top-right"
          autoClose={3000} />
      </AppBox>
    );
  }
}

export default App;