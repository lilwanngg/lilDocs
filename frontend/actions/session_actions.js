import * as SessionsUtil from '../util/session_api_util';

export const RECIEVE_CURRENT_USER = "RECIEVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECIEVE_ERRORS";

export const recieveCurrentUser = (user) => ({
    type: RECIEVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const recieveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const signup = user => dispatch => {
    return SessionsUtil.signup(user)
        .then((user => dispatch(recieveCurrentUser(user))),
            (errors => dispatch(recieveErrors(errors))))
}

export const login = user => {
    return dispatch => {

        return SessionsUtil.login(user)
            .then(
                (user => { dispatch(recieveCurrentUser(user)) }),
                (errors => dispatch(recieveErrors(errors))))
    }
}

export const logout = () => dispatch => {
    return SessionsUtil.logout()
        .then(
            (() => dispatch(logoutCurrentUser())),
            (errors => dispatch(recieveErrors(errors)))
        )
}