import {call, put, takeLatest} from 'redux-saga/effects';
import {loadTransactionList} from '../../../api';
import {fetchTransactionListError, fetchTransactionListSuccess} from './action';
import {LOAD_TRANSACTION_LIST} from './actionTypes';

function* fetchTransactionList() {
  try {
    const json = yield call(loadTransactionList);
    console.log(json.data.items)
    yield put(fetchTransactionListSuccess(json.data.items));
  } catch (error) {
    yield put(fetchTransactionListError(error));
  }
}
export default function* actionWatchFetchTransactionList() {
  yield takeLatest(LOAD_TRANSACTION_LIST, fetchTransactionList);
}
