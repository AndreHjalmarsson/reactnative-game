import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import firebase from 'firebase';

import { Button } from './common';

export default class Welcome extends Component {
  constructor() {
    super();

    this.state = { email: '', password: '', err: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Continue with...</Text>
        <TextInput
          style={styles.textField}
          placeholder="EMAIL"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textField}
          placeholder="PASSWORD"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry={true}
          autoCorrect={false}
        />
        <Button
          title={'Sign in'}
          onPress={() => this.onButtonPress.bind(this)}
          innerStyle={{ color: 'white', fontSize: 20 }}
        />
        <Text>{this.state.err}</Text>
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
  },
  textField: {
    borderColor: 'white',
    width: '60%',
    marginBottom: 10,
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 40
  }
});
