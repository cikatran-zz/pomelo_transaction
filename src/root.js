import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import mainReducer from './feature/main/redux/reducer';
import actionWatchFetchTransactionList from './feature/main/redux/saga';

export function* rootSaga() {
  yield all([actionWatchFetchTransactionList()]);
}

export const rootReducer = combineReducers({
  mainReducer,
});
