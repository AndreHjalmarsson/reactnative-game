import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class User extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>A USER</Text>
        <Text>A USER</Text>
        <Text>A USER</Text>
        <Text>A USER</Text>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Test')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});
