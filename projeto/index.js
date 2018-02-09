import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

const App = () => (
   <View>
      <Header />
   </View>
);

AppRegistry.registerComponent('projeto', () => App);
