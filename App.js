import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Root from './src/Root';
import User from './src/User';

const RootStack = createStackNavigator({
  RootScreen: Root,
  UserScreen: User
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
