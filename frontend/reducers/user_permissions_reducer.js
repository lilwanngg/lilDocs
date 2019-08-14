import { RECEIVE_PERMISSIONS, RECEIVE_PERMISSION, REMOVE_PERMISSION, REMOVE_DOC_PERMISSION } from '../actions/permission_actions'
import { merge } from 'lodash'

const userPermissionsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PERMISSIONS:
            return action.permissions
        case RECEIVE_PERMISSION:
            merge({}, state, { [action.permission.id]: action.permission })
        case REMOVE_PERMISSION:
            let newState = merge({}, state)
            delete newState[action.id]
            return newState
        case REMOVE_DOC_PERMISSION:
            newState = merge({}, state)
            delete newState[action.perm.id]
            return newState
        default:
            return state
    }
}

export default userPermissionsReducer
