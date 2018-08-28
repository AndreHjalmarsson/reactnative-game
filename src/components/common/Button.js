import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Button extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Button</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B2FF59',
    padding: 5,
    height: 30,
    borderRadius: 5
    // overflow: 'hidden',
  }
});
