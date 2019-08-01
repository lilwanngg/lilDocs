import { merge } from 'lodash'
import { RECIEVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS, VERIFY_USER } from '../actions/session_actions';

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let user
    let newState
    switch (action.type) {
        case RECIEVE_CURRENT_USER:
            newState = merge({}, state)
            delete newState.session.loginuser
            user = action.user;
            return merge({}, state, { user });
        case LOGOUT_CURRENT_USER:
            return _nullSession
        case RECEIVE_ERRORS:
            return merge({}, state, { session: action.errors });
        case VERIFY_USER:
            debugger
            user = action.user;
            newState = merge({}, state, { loginuser: user });
            debugger
            return ( newState.session.loginuser )
        default:
            return state;
    }
}

export default sessionReducer;
