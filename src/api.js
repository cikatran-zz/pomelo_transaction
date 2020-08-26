import Axios from 'axios';

const baseURL = 'https://run.mocky.io/v3/a261c5ca-6e71-4482-85f2-c0fb913e1cde';

export const loadTransactionList = () => {
  return Axios.get(baseURL);
};
