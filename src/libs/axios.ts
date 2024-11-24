import axios from 'axios';

const axiosRequest = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosRequest;
