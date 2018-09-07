import firebase from 'firebase';

import { AUTH_USER, UNAUTH_USER, AUTH_USER_FAILED, FB_AUTHED, EMAIL_AUTHED, EMAIL_UNAUTHED } from './types';

export function onLoginButtonPress(email, password) {
  return dispatch => {
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
        dispatch({ type: EMAIL_AUTHED });
      });
    dispatch({ type: EMAIL_AUTHED });
  };
}

export function checkAuth() {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: AUTH_USER, payload: user });
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

export function createCharacterName(name) {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/character`)
      .push(name);
  };
}

export function onLoginWithFacebookButtonPress(data) {
  return async dispatch => {
    const credential = await firebase.auth.FacebookAuthProvider.credential(data.credentials.token);
    firebase
      .auth()
      .signInAndRetrieveDataWithCredential(credential)
      .catch(error => {
        console.log(error);
      });
    dispatch({ type: FB_AUTHED });
  };
}
