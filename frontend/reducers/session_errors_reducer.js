import { merge } from 'lodash'
import { RECIEVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const sessionReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECIEVE_CURRENT_USER:
            return []
        case RECEIVE_ERRORS:
            return merge([], [action.errors]);
        default:
            return state;
    }
}

export default sessionReducer;