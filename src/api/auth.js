import axios from 'axios';

const login = credentials => axios.post('/login', credentials);
const register = userInfo => axios.post('/register', userInfo);
const authenticate = () => axios.post('/authenticate');
const edit = info => axios.put('/me', info);

export default {
  login,
  edit,
  authenticate,
  register,
};
