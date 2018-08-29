import { AUTH_USER_FAILED } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER_FAILED:
      return { ...state, auth_error: true };
  }
  return state;
}
