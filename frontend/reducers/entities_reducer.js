import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import documentsReducer from './documents_reducer';
import permissionsReducer from './permissions_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    documents: documentsReducer,
    permissions: permissionsReducer
});

export default entitiesReducer;