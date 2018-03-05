import _ from 'lodash';

import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');     
        case FETCH_POST:
            // ES 5:
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;

            // ES 6:
            const post = action.payload.data;
            return { ...state, [post.id]: post };
        case CREATE_POST:
            return state;
        default:
            return state;
    }
}