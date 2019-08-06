import { connect } from 'react-redux';
import React from 'react';
import { updateDocument, fetchDocument } from '../../actions/document_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

class EditTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.doc
        this.editTitle = this.editTitle.bind(this)
    }

    editTitle() {
        const { title,  content, id } = this.state
        this.props.editTitle({id, title, content})
        this.props.closeModal()
    }

    componentDidMount() {
        this.props.fetchDocument(this.props.documentId)
    }

    update(field) {
        return (e) => {
            this.setState( { [field]: e.target.value } )
        }
    }

    render() { 
        if (!this.props.doc) {return null}
        return(
            <form className="edit-title-form modal-child" onClick={e => e.stopPropagation()}>
                <label className="edit-label">Rename</label>
                <label className="sub-edit-label">Please enter a new name for the item:</label>
                <input className="edit-input" type="text" value={this.state.title} onChange={this.update('title')}/>
                <input className="edit-button" type="submit" onClick={this.editTitle} value="OK"/>
            </form>
        )
    }
}

const msp = (state, ownProps) => {
    return { 
        doc: state.entities.documents[ownProps.documentId]
    };
};

const mdp = dispatch => {
    return {
        editTitle: (doc) => dispatch(updateDocument(doc)),
        closeModal: () => dispatch(closeModal()),
        fetchDocument: (id) => dispatch(fetchDocument(id))
    };
};

export default withRouter(connect(msp, mdp)(EditTitle));

