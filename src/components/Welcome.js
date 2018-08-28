import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from './common';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Button title={'Sign in'} onPress={() => console.log('hi')} innerStyle={{ color: 'white', fontSize: 20 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
