import * as actionTypes from './actionTypes';

const initialState = {
  transaction_list: [],
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_TRANSACTION_LIST_SUCCESS:
      console.log(action.data[]);
      return {
        ...state,
        transaction_list: [...state.transaction_list, action.data],
      };

    default:
      return state;
  }
}
