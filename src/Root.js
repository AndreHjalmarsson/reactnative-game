import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import User from './components/User';
import Test from './components/Test';
import Welcome from './components/Welcome';

const RootStack = createStackNavigator(
  {
    User,
    Test,
    Welcome
  },
  { initialRouteName: 'Welcome' }
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
