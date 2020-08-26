/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
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
    console.log('item', item);
    return (
      <TransactionContainer>
        <Text>{item.item.amount}</Text>
      </TransactionContainer>
    );
  };

  const TransactionContainer = styled.View`
    width: 360px;
    height: 58px;
    border-radius: 10px;
    box-shadow: 0 5px 10px ;
    background-color: #ffffff;
  `;

  // console.log('transactionList', transactionList);

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            margin: 20,
            alignSelf: 'center',
          }}>
          Transaction List
        </Text>
        <FlatList
          style={{marginHorizontal: 10}}
          data={transactionList}
          keyExtractor={_keyExtractor}
          renderItem={_renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
