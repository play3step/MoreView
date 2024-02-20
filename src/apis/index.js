import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_SERVER_URL;

const basicApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

basicApi.interceptors.request.use(
  (config) => {
    const accessToken = '';
    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => Promise.reject(error),
);
export default basicApi;
