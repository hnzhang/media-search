import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles video related actions
// The idea is to return an updated copy of the state depending on the action type.
export default function (state = initialState.videos, action) {
  console.log('in videos reducer');
  switch (action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...action.videos];
    case types.SELECTED_VIDEO:
      Object.assign(state, {selectedVideo: action.video});
      return state;
    default:
      return state;
  }
}