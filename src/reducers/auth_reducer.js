import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_USER_FAILED,
  FB_AUTHED,
  FB_UNAUTHED,
  EMAIL_AUTHED,
  EMAIL_UNAUTHED
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER_FAILED:
      return { ...state, auth_error: 'Inloggning misslyckades' };
    case AUTH_USER:
      return { ...state, currentUser: action.payload, authed: true };
    case UNAUTH_USER:
      return { ...state, authed: false, fb_authed: false, email_authed: false };
    case EMAIL_AUTHED:
      return { ...state, email_authed: true };
    case FB_AUTHED:
      return { ...state, fb_authed: true };
  }
  return state;
}
