import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';

class User extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>A USER</Text>
        <Text>A USER</Text>
        <Text>A USER</Text>
        <Text>A USER</Text>
        <Button title="Go to Details" onPress={() => this.props.logOut()} />
      </View>
    );
  }
}

export default connect(
  null,
  actionCreators
)(User);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
