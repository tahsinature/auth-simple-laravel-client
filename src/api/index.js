import axios from 'axios';
import auth from './auth';
import quote from './quote';

const token = localStorage.getItem('token');
axios.defaults.baseURL = 'https://auth-simple-laravel.herokuapp.com/';
axios.defaults.headers.common['X-Token-Auth'] = token;

export default {
  auth,
  quote,
};
