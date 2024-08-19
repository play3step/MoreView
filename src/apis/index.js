import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_SERVER_URL;

const basicApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default basicApi;
