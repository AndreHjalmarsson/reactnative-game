import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';
import User from './User';
import Login from './Login';

class RootScreen extends React.Component {
  render() {
    this.props.checkAuth();
    return this.props.authed ? <User /> : <Login />;
  }
}

function mapStateToProps(state) {
  return {
    authed: state.auth.authed
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(RootScreen);
