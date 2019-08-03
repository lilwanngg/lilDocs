import * as DocumentsUtil from "../util/document_api_util"

export const RECEIVE_DOCUMENTS = "RECEIVE_DOCUMENTS"
export const RECEIVE_DOCUMENT = "RECEIVE_DOCUMENT"
export const REMOVE_DOCUMENT = "REMOVE_DOCUMENT"

export const receiveAllDocuments = (documents) => ({
    type: RECEIVE_DOCUMENTS,
    documents
})

export const receiveOneDocument = (document) => ({
    type: RECEIVE_DOCUMENT,
    document
})

export const removeDocument = (id) => ({
    type: REMOVE_DOCUMENT,
    id
})


export const fetchDocuments = () => dispatch => {
    return DocumentsUtil.fetchDocuments().then( documents => dispatch(receiveAllDocuments(documents)))
}

export const fetchDocument = (id) => dispatch => {
    return DocumentsUtil.fetchDocument(id).then(document => dispatch(receiveOneDocument(document)))
}

export const createDocument = (doc) => dispatch => {
    return DocumentsUtil.createDocument(doc).then(document => dispatch(receiveOneDocument(document)))
}

export const updateDocument = (doc) => dispatch => {
    return DocumentsUtil.updateDocument(doc).then(document => dispatch(receiveOneDocument(document)))
}

export const deleteDocument = (id) => dispatch => {
    return DocumentsUtil.deleteDocument(id).then(document => dispatch(removeDocument(id)))
}