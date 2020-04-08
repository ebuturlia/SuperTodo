import * as types from '../constants/actionTypes';
import * as endpoints from '../configs';

export const login = (username, password) => {
  return {
    endpoint: endpoints.login,
    method: 'POST',
    types: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_FAILURE],
    body: {
      userName: username,
      password
    }
  };
};

export const logout = () => ({
  type: types.LOGOUT
})
