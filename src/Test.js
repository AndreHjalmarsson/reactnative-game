import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up Test.js to start working on your Test!!</Text>
      </View>
    );
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
