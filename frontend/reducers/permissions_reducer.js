import { RECEIVE_PERMISSIONS, RECEIVE_PERMISSION, REMOVE_PERMISSION } from '../actions/permission_actions'
import { merge } from 'lodash'

const permissionsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PERMISSIONS:
            return action.permissions
        case RECEIVE_PERMISSION:
            merge( {}, state, { [action.permission.id]: action.permission})
        case REMOVE_PERMISSION:
            debugger
            let newState = merge({}, state)
            delete newState[action.id]
            return newState
        default:
            return state
    }
}

export default permissionsReducer
