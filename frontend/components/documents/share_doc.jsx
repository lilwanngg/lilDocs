import { connect } from 'react-redux';
import React from 'react';
import { updateDocument, fetchDocument } from '../../actions/document_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

class EditTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { doc: this.props.doc, email: "" }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        // if (!this.props.doc) { return null }
        return (
            <form className="share-doc-form modal-child" onClick={e => e.stopPropagation()}>
                <label className="share-label">Share with others</label>
                <label className="sub-share-label">Enter email</label>
                <div>
                    <input className="share-input" type="text" value={this.state.email} onChange={this.update('email')} />
                    <div className="share-dropdown">
                        <li>Can Edit</li>
                        <li>Can View</li>
                    </div>
                </div>
                <input className="share-button" type="submit" onClick={this.editTitle} value="OK" />
            </form>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        doc: state.entities.documents[ownProps.match.params.id]
    };
};

const mdp = dispatch => {
    return {
        // editTitle: (doc) => dispatch(updateDocument(doc)),
        closeModal: () => dispatch(closeModal()),
        // fetchDocument: (id) => dispatch(fetchDocument(id))
        //one for send permission
    };
};

export default withRouter(connect(msp, mdp)(ShareDoc));

