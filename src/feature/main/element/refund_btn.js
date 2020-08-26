/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default function RefundButton({disabled, onPress, isRefunded}) {
  const RefundBtn = styled.View`
    width: 200px;
    height: 30px;
    border-radius: 14px;
    background-color: ${(props) => (props.isRefunded ? 'grey' : '#55e8b9')};
    margin: 5px;
    align-self: center;
    justify-content: center;
    align-items: center;
  `;

  const RefundLabel = styled.Text`
    width: 123px;
    height: 14px;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
  `;

  // console.log('transactionList', transactionList);
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <RefundBtn isRefunded={isRefunded}>
        <RefundLabel>{isRefunded ? 'Refunded' : 'Refund'}</RefundLabel>
      </RefundBtn>
    </TouchableOpacity>
  );
}
