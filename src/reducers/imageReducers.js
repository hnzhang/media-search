import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles image related actions
export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...action.images];
    case types.SELECTED_IMAGE:
      Object.assign(state, {selectedImage: action.image});
      return  state;
    default:
      return state;
  }
}