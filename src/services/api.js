import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});
// baseURL: 'https://cors-anywhere.herokuapp.com/https://api.github.com',

export default api;
