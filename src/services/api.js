// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default api;
