import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  startChat: ['name'],
},{ prefix: 'users/'});

const INITIAL_STATE = {
  user: null
};

const startChat = (state = INITIAL_STATE, action) => ({
  ...state,
  user: action.name
})

export default createReducer(INITIAL_STATE,{
  [Types.START_CHAT]: startChat,
});
