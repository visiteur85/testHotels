import axios from 'axios';

export const API_URL = "http://engine.hotellook.com/api/v2/cache.json";

export const instance = axios.create({
    baseURL: API_URL,

});