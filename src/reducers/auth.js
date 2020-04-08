import * as types from '../constants/actionTypes';

let initialState = {
  fetchingLogin: false,
  token: null,
  errorMessage: null,
  errorCode: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        fetchingLogin: true,
        errorMessage: null,
        errorCode: null
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        token: 'dumb token',
        fetchingLogin: false,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        fetchingLogin: false,
        errorMessage: action.errorMessage,
        errorCode: action.errorCode,
      };
    }

    case types.LOGOUT:
      return {
        ...state,
        token: null,
      }

    default:
      return state;
  }
};

export default auth;
