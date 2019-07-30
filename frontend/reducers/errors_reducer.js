import { combineReducers } from 'redux'
import sessionErrorsReducers from './session_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducers
})

export default errorsReducer;