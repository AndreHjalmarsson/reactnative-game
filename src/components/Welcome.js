import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from './common';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Button />
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
