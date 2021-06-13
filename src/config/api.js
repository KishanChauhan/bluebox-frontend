import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({ baseURL: API_URL });

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.patch['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN


export { instance };
