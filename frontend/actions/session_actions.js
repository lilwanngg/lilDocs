import * as SessionsUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const VERIFY_USER = "VERIFY_USER";
export const FIND_USER = "FIND_USER";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const checkEmail = (user) => ({
    type: VERIFY_USER,
    user
})

export const findUser = (user) => ({
    type: FIND_USER,
    user
})

export const findEmail = (input) => dispatch => {
    return SessionsUtil.findEmail(input.email)
        .then((user => { 
            dispatch(checkEmail(user))}),
            (errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const fetchUser = (input) => dispatch => {
    return SessionsUtil.checkPermission(input)
        .then((user => {
            dispatch(findUser(user))}),
            (errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const signup = user => dispatch => {
    return SessionsUtil.signup(user)
        .then((user => dispatch(receiveCurrentUser(user))),
            (errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const login = user => {
    return dispatch => {
        return SessionsUtil.login(user)
            .then(
                (user => { dispatch(receiveCurrentUser(user)) }),
                (errors => dispatch(receiveErrors(errors.responseJSON))))
    }
}

export const logout = () => dispatch => {
    return SessionsUtil.logout()
        .then(
            (() => dispatch(logoutCurrentUser())),
            (errors => dispatch(receiveErrors(errors.responseJSON)))
        )
}