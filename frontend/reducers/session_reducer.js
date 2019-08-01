import { merge } from 'lodash'
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS, VERIFY_USER } from '../actions/session_actions';

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let user
    let newState
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            user = action.user;
            return { id: user.id };
        case LOGOUT_CURRENT_USER:
            return _nullSession
        case RECEIVE_ERRORS:
            return merge({}, state, { session: action.errors });
        case VERIFY_USER:
            user = action.user;
            newState = merge({}, state, { loginuser: user });
            return newState
        default:
            return state;
    }
}

export default sessionReducer;
