import axios from "axios";

import { API_URL } from './constant'
const APIKey = 'e0a49ae4179e41afa2db71b2592c7cfb';

console.log("APIKey=>", APIKey)

const Api = axios.create({
    baseURL: `${API_URL}`,
});

Api.interceptors.request.use(
    (config) => {
        return {
            ...config,
            headers: {
                ...config.headers,
                apikey: APIKey,
            },
        };
    },
    (error) => {
        return Promise.reject(error);
    }
);

Api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            console.log("Error", error)
        }
        return Promise.reject(error);
    }
);

export default Api;
