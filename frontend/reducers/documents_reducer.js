import { RECEIVE_DOCUMENTS, RECEIVE_DOCUMENT, REMOVE_DOCUMENT } from '../actions/document_actions'
import { merge } from 'lodash'

const documentsReducer = ( state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_DOCUMENTS:
            return action.documents
        case RECEIVE_DOCUMENT:
            return merge( {}, state, { [action.document.id]: action.document})
        case REMOVE_DOCUMENT:
            let newState = merge({}, state)
            delete newState[id]
            return newState
        default:
            return state
    }
}

export default documentsReducer