import axios from 'axios';
import { localUrl } from './component/env';

const baseURL = localUrl + 'user/login/';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout:5000,
    headers: {
        Authorization: localStorage.getItem('acces_token')
             ? 'JWT ' + localStorage.getItem('access_token')
             : null,
        'content-Type' : 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;