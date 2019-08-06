import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import documentsReducer from './documents_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    documents: documentsReducer
});

export default entitiesReducer;