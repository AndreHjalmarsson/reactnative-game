import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

import { Button } from './common';
import * as actionCreators from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = { email: '', password: '', err: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <FBLogin
          loginBehavior={FBLoginManager.LoginBehaviors.Web}
          permissions={['email']}
          onLogin={data => this.props.onLoginWithFacebookButtonPress(data)}
        />
        ;
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
          onPress={() => this.props.onLoginButtonPress(this.state.email, this.state.password)}
          innerStyle={{ color: 'black', fontSize: 20 }}
        />
        <Text>{this.props.authError}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    authError: state.auth.auth_error
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(Login);

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
