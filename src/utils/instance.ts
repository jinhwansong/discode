import axios from 'axios';
import { getCookies } from './cookie';

export const baseAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

baseAxios.interceptors.request.use((config) => {
  const token = getCookies('token');
  const newConfig = { ...config };
  newConfig.headers.Authorization = `Bearer ${token}`;
  return config;
});

baseAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    const message = err.response.data;
    const status = err.response.status;
    switch (status) {
      case 400:
        switch (message.result.resultMessage) {
          case '중복된 아이디가 존재합니다.':
            return Promise.reject(new Error('중복된 아이디가 존재합니다.'));
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
);
