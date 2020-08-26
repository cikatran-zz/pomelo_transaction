/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import React, {useCallback, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import RefundButton from './element/refund_btn';
import {fetchTransactionList, refundTransaction} from './redux/action';

export default function MainScreen() {
  const dispatch = useDispatch();
  const transactionList = useSelector(
    (state) => state.mainReducer.transaction_list,
  );

  useEffect(() => {
    dispatch(fetchTransactionList());
  }, []);

  const handleRefund = useCallback(
    (index) => {
      dispatch(refundTransaction(index));
    },
    [dispatch],
  );

  const _keyExtractor = (item, index) => {
    return index.toString();
  };

  const _renderItem = ({item, index}) => {
    return (
      <TransactionContainer>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Price: </Text>
          <Text>&#8364;{item.amount}</Text>
        </View>
        <View style={{marginVertical: 10, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Provider: </Text>
          <Text>{item.providerDisplayName}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Security Word: </Text>
          <Text>{item.securityWord}</Text>
        </View>
        {/* <TouchableOpacity
          disabled={item.isRefunded}
          onPress={() => handleRefund(index)}>
          <RefundBtn isRefunded={item.isRefunded}>
            <RefundLabel>{item.isRefunded ? 'Refunded' : 'Refund'}</RefundLabel>
          </RefundBtn>
        </TouchableOpacity> */}
        <RefundButton
          onPress={() => handleRefund(index)}
          isRefunded={item.isRefunded}
          disabled={item.isRefunded}
        />
      </TransactionContainer>
    );
  };

  const TransactionContainer = styled.View`
    width: 360px;
    height: 130px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin: 5px;
    padding: 10px;
  `;

  const TransactionTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin: 20px;
    align-self: center;
  `;

  // console.log('transactionList', transactionList);

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column', height: '100%'}}>
        <TransactionTitle>Transaction List</TransactionTitle>
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
