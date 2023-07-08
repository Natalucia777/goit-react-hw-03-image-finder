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


const BASE_URL = axios.defaults.baseURL = "https://pixabay.com/api";
const API_KEY = '36094261-707a3f1df60011e058a78caa9';
const quantityPage = 12;
async function getComponentImages (query, page, loading) {
    const response = await axios.get(BASE_URL, {
      loading,
      params: {
        key: API_KEY,
        query,
        imageType: 'photo',
        orientation: 'horizontal',
        quantityPage: quantityPage,
        page,
      },
    });
    return response.data;
  }
class App extends Component {
   abortCtrl;
  state = {
    URL: 'https://pixabay.com/api',
    API_KEY: '36094261-707a3f1df60011e058a78caa9',
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
    this.setState({ articles: response.data.hits });
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
        images: [...prevState.images, ...data.hits],
        isLastPage:
          prevState.images.length + data.hits.length >= data.totalHits,
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
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {error && <Error>Error: {error}</Error>}
          <ImageGallery images={pictures} />
       {!isLoading && images.length > 0 && !isLastPage && (
          <Button onClick={this.loadMore} />)}
         {isLoading && <Loader />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
       />
      </div>
    );
  }
}

export default App;
