import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import { StackNavigator } from 'react-navigation';

const App = () => (
   <View>
      <Header />
   </View>
);

AppRegistry.registerComponent('projeto', () => App);
