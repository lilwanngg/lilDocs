import { combineReducers } from 'redux'
import userPermissionReducer from './user_permissions_reducer';
import docPermissionReducer from './doc_permissions_reducer';


const permissionReducer = combineReducers({
    user: userPermissionReducer,
    doc: docPermissionReducer
})

export default permissionReducer;