/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactionList} from './redux/action';

export default function MainScreen() {
  const dispatch = useDispatch();
  const transactionList = useSelector(
    (state) => state.mainReducer.transaction_list,
  );
  useEffect(() => {
    dispatch(fetchTransactionList());
  }, []);

  const _keyExtractor = (item, index) => {
    return index.toString();
  };

  const _renderItem = (item) => {
    // console.log('item', item);
    return <Text>{item.amount}</Text>;
  };

  console.log('transactionList', transactionList);

  return (
    <View>
      <FlatList
        style={{margin: 10}}
        data={[transactionList]}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
      />
    </View>
  );
}
