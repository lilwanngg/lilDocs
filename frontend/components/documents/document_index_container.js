import { connect } from 'react-redux'
import DocumentIndex from "./document_index"
import { fetchDocuments } from '../../actions/document_actions'

const msp = (state) => ({
    documents: Object.values(state.entities.documents)
})

const mdp = dispatch => ({
    fetchDocuments: () => dispatch(fetchDocuments())
})

export default connect(msp, mdp) (DocumentIndex)