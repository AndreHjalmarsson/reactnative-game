import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import Root from './src/Root';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBGtxGK2i74oBhpF35fIPh_B0u6cNDhrk',
      authDomain: 'reactnative-game-40d49.firebaseapp.com',
      databaseURL: 'https://reactnative-game-40d49.firebaseio.com',
      projectId: 'reactnative-game-40d49',
      storageBucket: 'reactnative-game-40d49.appspot.com',
      messagingSenderId: '956485123235'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Root />;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
