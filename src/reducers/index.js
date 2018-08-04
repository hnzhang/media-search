import { combineReducers } from 'redux';
import images from './imageReducers';
import videos from './videoReducers';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  images, 
  videos,
});

export default rootReducer;