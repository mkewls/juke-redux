import { createStore, combineReducers } from 'redux';
import initialState from './initialState';

const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';

export const receiveAlbums = () => ({
  type: RECEIVE_ALBUMS_FROM_SERVER,
  albumList
});

function reducer (state = initialState, action) {
  switch (action.type) {
      case RECEIVE_ALBUMS_FROM_SERVER: return Object.assign({}, state, {albumList: action.albumList})
      default: return state;
  }
}

const store = createStore(reducer);

store.getState();
console.log(store.getState());
store.dispatch({ type: RECEIVE_ALBUMS_FROM_SERVER, albumList: ['Mobius'] });
console.log(store.getState());

export default store;
