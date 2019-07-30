import { merge } from 'lodash'
import { RECIEVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECIEVE_CURRENT_USER:
            const { id } = action.user;
            return merge({}, state, { id: id });
        case LOGOUT_CURRENT_USER:
            return _nullSession
        case RECEIVE_ERRORS:
            return merge({}, state, { session: action.errors });
        default:
            return state;
    }
}

export default sessionReducer;
