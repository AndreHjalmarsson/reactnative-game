import firebase from 'firebase';

import { AUTH_USER_FAILED } from './types';

export function onLoginButtonPress() {
  console.log('hi');
  const { email, password } = this.state;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(() => {
          return dispatch => {
            dispatch({ type: AUTH_USER_FAILED });
          };
        });
    });
}
