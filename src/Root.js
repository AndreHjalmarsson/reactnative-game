import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import User from './components/User';
import Test from './components/Test';
import LoginForm from './components/LoginForm';

const RootStack = createStackNavigator(
  {
    User: User,
    Test: Test
  },
  { initialRouteName: 'User' }
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
    justifyContent: 'center',
    width: '100%'
  }
});
