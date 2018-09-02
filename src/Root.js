import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Test from './components/Test';
import RootScreen from './components/RootScreen';

const RootStack = createStackNavigator(
  {
    Test,
    RootScreen
  },
  { initialRouteName: 'RootScreen' }
);

export default class Root extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
