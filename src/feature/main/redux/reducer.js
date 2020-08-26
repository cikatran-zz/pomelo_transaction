import {cloneDeep} from 'lodash';
import * as actionTypes from './actionTypes';

const initialState = {
  transaction_list: [],
  isLoading: false,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_TRANSACTION_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOAD_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transaction_list: action.data,
      };
    case actionTypes.REFUND:
      let currentTransactionList = cloneDeep(state.transaction_list);
      let currentItemIndex = action.index;
      let item = currentTransactionList[currentItemIndex];
      item.isRefunded = true;
      return {
        ...state,
        isLoading: false,
        transaction_list: currentTransactionList,
      };
    default:
      return state;
  }
}
