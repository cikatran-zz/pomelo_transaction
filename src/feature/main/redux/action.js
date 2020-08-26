import {
  LOAD_TRANSACTION_LIST,
  LOAD_TRANSACTION_LIST_ERROR,
  LOAD_TRANSACTION_LIST_SUCCESS,
} from './actionTypes';

export const fetchTransactionList = () => ({
  type: LOAD_TRANSACTION_LIST,
});

export const fetchTransactionListSuccess = (data) => {
  return {
    type: LOAD_TRANSACTION_LIST_SUCCESS,
    data,
  };
};

export const fetchTransactionListError = (error) => ({
  type: LOAD_TRANSACTION_LIST_ERROR,
  error,
});
