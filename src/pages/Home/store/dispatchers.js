import { Creators } from './users';

export function dispatchStartChat(...args){
  return dispatch => dispatch(Creators.startChat(...args))
}

