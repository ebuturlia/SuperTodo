import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

import auth from './auth';
import todos from './todos';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['errorCode', 'errorMessage', 'fetchingLogin'],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  todos,
});
