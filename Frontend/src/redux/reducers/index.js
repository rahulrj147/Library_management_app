import { combineReducers } from 'redux';
import auth from './authReducer';
import member from './memberReducer';

export default combineReducers({
  auth,
  member,
});
