import { combineReducers } from 'redux';
import PostReducer from './reducer_post';


const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
