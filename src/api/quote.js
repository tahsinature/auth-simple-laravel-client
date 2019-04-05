import axios from 'axios';

const get = () => axios.get('/quotes');
const add = data => axios.post('/quotes', data);
const remove = id => axios.delete(`/quotes/${id}`);

export default {
  get,
  add,
  remove,
};
