import axios from 'axios';

import config from '@config';

const axiosInstance = axios.create({
  baseURL: config.apiURl,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export default axiosInstance;
