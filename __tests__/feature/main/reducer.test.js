import {
  fetchTransactionList,
  fetchTransactionListSuccess,
  refundTransaction,
} from '../../../src/feature/main/redux/action';
import reducer from '../../../src/feature/main/redux/reducer';

describe('REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      transaction_list: [],
      isLoading: false,
    });
  });

  it('should handle "LOAD_TRANSACTION_LIST" action', () => {
    expect(reducer({}, fetchTransactionList())).toEqual({isLoading: true});
  });

  it('should handle "LOAD_TRANSACTION_LIST_SUCCESS" action', () => {
    const mockData = [
      {
        items: [
          {
            id: '5dc77df02320e626185d5021',
            created: '2019-11-10T03:03:12.383Z',
            updated: '2019-11-10T03:03:12.383Z',
          },
        ],
      },
    ];
    expect(reducer({}, fetchTransactionListSuccess(mockData))).toEqual({
      transaction_list: mockData,
      isLoading: false,
    });
  });

  it('should handle "REFUND" action', () => {
    const mockBeforeData = [
      {
        id: '5dc77df02320e626185d5021',
        created: '2019-11-10T03:03:12.383Z',
        updated: '2019-11-10T03:03:12.383Z',
      },
    ];

    const mockAfterData = [
      {
        id: '5dc77df02320e626185d5021',
        created: '2019-11-10T03:03:12.383Z',
        updated: '2019-11-10T03:03:12.383Z',
        isRefunded: true,
      },
    ];
    const mockIndex = 0;
    expect(
      reducer({transaction_list: mockBeforeData}, refundTransaction(mockIndex)),
    ).toEqual({
      transaction_list: mockAfterData,
      isLoading: false,
    });
  });
});
