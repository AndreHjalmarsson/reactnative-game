import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import Root from './src/Root';
import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

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
      <Provider store={store}>
        <View style={styles.container}>
          <Root />;
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
