/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactionList} from './redux/action';
import styled from 'styled-components';


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
      <View style>
        <Text>{item.item.amount}</Text>
      </View>
    );
  };

  const StyledContainer = styled.view`
    height: 58,
    width: 360,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 10,;

  export const Container = styled.View`
  display: flex;
  border-width: 2px;
  border-radius: 6px;
  border-color: ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px 10px;
  box-shadow: ${props => props.shadowColor === undefined
    ? `none`
    : `0px 3px 3px ${props.shadowColor}`
  };
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
