import { combineReducers } from 'redux';
import users from '../pages/Home/store/users';
import messages from '../pages/Chat/store/messages';

const reducers = combineReducers({
  users,
  messages
});

export default reducers;
