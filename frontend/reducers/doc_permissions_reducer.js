import { RECEIVE_DOC_PERMISSIONS, RECEIVE_DOC_PERMISSION, REMOVE_DOC_PERMISSION } from '../actions/permission_actions'
import { merge } from 'lodash'

const docPermissionsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_DOC_PERMISSIONS:
            return action.permissions
        case RECEIVE_DOC_PERMISSION:
            debugger
            return merge({}, state, { [action.permission.id]: action.permission })
        case REMOVE_DOC_PERMISSION:
            debugger
            let newState = merge({}, state)
            delete newState[action.perm.id]
            return newState
        default:
            return state
    }
}

export default docPermissionsReducer