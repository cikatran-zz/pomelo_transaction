/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import MainScreen from './src/feature/main';

const {store} = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
