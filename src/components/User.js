import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

import * as actionCreators from '../actions';

class User extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
  }

  renderLogout() {
    const { email_authed, fb_authed } = this.props;
    if (email_authed === true) {
      return <Button title="Log out" onPress={() => this.props.logOut()} />;
    } else if (fb_authed === true) {
      return <FBLogin onLogout={() => this.props.logOut()} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textField}
          placeholder="Value"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          secureTextEntry={true}
          autoCorrect={false}
        />
        <Button title="Send" onPress={() => this.props.createCharacterName(this.state.text)} />
        {this.renderLogout()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    email_authed: state.auth.email_authed,
    fb_authed: state.auth.fb_authed
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(User);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
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
