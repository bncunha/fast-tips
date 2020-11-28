/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Home from './src/pages/Home/Home';
import { Body } from './src/styles';
import { Colors } from './src/utils/constants';


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Body>
          <Home></Home>          
        </Body>
      </SafeAreaView>
    </>
  );
};

export default App;
