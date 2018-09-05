import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewPropTypes } from 'react-native';

export class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={this.props.containerStyle ? this.props.containerStyle : styles.container}
        onPress={() => this.props.onPress()}
      >
        <Text style={this.props.innerStyle ? this.props.innerStyle : styles.inner}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 'auto',
    overflow: 'hidden',
    borderRadius: 4
  },
  inner: {
    color: 'black'
  }
});
