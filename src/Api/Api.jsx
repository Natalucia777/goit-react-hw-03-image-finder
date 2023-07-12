import axios from 'axios';

const BASE_URL = axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = '36094261-707a3f1df60011e058a78caa9';
const quantityPage = 12;

async function getComponentImages (query, page) {
    const response = await axios.get(BASE_URL, {
      // loading,
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