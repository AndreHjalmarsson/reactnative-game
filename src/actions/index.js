import firebase from 'firebase';

import { AUTH_USER, UNAUTH_USER, AUTH_USER_FAILED } from './types';

export function onLoginButtonPress(email, password) {
  return dispatch => {
    console.log('hi');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            dispatch({ type: AUTH_USER_FAILED });
          });
      });
  };
}

export function checkAuth() {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: AUTH_USER });
      } else return;
    });
  };
}

export function logOut() {
  return dispatch => {
    firebase.auth().signOut();
    dispatch({ type: UNAUTH_USER });
  };
}
