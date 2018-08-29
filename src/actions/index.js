import firebase from 'firebase';

import { AUTH_USER_FAILED } from './types';

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
      });
  };
}
