import axios from 'axios';
import { serviceEnv } from '~/.env-config';

const env = import.meta.env.VITE_HTTP_ENV || 'test';

const { url } = serviceEnv[env];

const service = axios.create({
    baseURL: url,
    timeout: 15000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
