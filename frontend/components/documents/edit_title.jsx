import { connect } from 'react-redux';
import React from 'react';
import { updateDocument } from '../../actions/document_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

class EditTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.doc
    }

    editTitle() {
        const { title,  content, id } = this.state
        this.props.editTitle({id, title, content})
    }

    componentDidMount() {
        debugger
        // this.props.fetchDocument(this.props.doc.id)
    }

    update(field) {
        return (e) => {
            this.setState( { [field]: e.target.value } )
        }
    }

    render() {
        if (!this.props.doc) {return null}
        return(
            <form className="edit-title-form">
                <label className="edit-label">Rename</label>
                <label className="sub-edit-label">Please enter a new name for the item:</label>
                <input className="edit-input" type="text" value={this.state.title} onChange={this.update('title')}/>
                {/* <input type="text" value="" onChange={this.update('title')}/> */}
                <input className="edit-button" type="submit" onClick={this.editTitle} value="OK"/>
            </form>
        )
    }
}

const msp = (state) => {
    debugger
    return { 
        // doc: state.entities.documents[1]
        doc: { id: 11, title: "hello", content: "asdf"}
    };
};

const mdp = dispatch => {
    return {
        editTitle: (doc) => dispatch(updateDocument(doc)),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(msp, mdp)(EditTitle));

