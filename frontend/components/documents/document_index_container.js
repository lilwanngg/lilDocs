import { connect } from 'react-redux'
import DocumentIndex from "./document_index"
import { fetchDocuments, createDocument, fetchDocument, deleteDocument, updateDocument } from '../../actions/document_actions'
import { createPermission } from '../../actions/permission_actions'
import { openModal } from '../../actions/modal_actions'

const msp = (state) => ({
    documents: Object.values(state.entities.documents),
    user: state.entities.users[state.session.id],
})

const mdp = dispatch => ({
    fetchDocuments: () => dispatch(fetchDocuments()),
    createDocument: (doc) => dispatch(createDocument(doc)),
    fetchDocument: (id) => dispatch(fetchDocument(id)),
    deleteDocument: (id) => dispatch(deleteDocument(id)),
    updateDocument: (doc) => dispatch(updateDocument(doc)),
    openModal: (modal) => dispatch(openModal(modal)),
    createPermission: (permission) => dispatch(createPermission(permission))
})

export default connect(msp, mdp) (DocumentIndex)