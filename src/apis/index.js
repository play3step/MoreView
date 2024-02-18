import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: BASE_URL,
    language: 'ko-KR',
  },
  headers: {},
});

export default instance;
