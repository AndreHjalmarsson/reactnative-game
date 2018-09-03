import { AUTH_USER, UNAUTH_USER, AUTH_USER_FAILED } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER_FAILED:
      return { ...state, auth_error: 'Inloggning misslyckades' };
    case AUTH_USER:
      return { ...state, currentUser: action.payload, authed: true };
    case UNAUTH_USER:
      return { ...state, authed: false };
  }
  return state;
}
