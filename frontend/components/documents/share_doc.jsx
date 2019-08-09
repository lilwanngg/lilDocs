import { connect } from 'react-redux';
import React from 'react';
import { fetchUser, receiveErrors } from '../../actions/session_actions'
import { createPermission } from '../../actions/permission_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

class ShareDoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  session: this.props.session, docId: this.props.docId.id, email: "", type: "edit", clicked: false}
        this.checkUser = this.checkUser.bind(this)
    }

    componentDidMount() {
        this.props.removeErrors()
    }

    checkUser(type) {
        this.props.fetchUser({email: this.state.email, docId: this.props.documentId, type: type}).then( () =>this.props.closeModal())
    }
    

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        let { type } = this.state
        let modal
        const { errors } = this.props
        const errs = errors.map( (err, idx) => { return (<li className="share-errors" key={`err${idx}`}>{err}</li>) })
        if (errs.length) {
            return ( 
                <form className="share-doc-form modal-child" onClick={e => e.stopPropagation()}>
                    <label className="share-label">Errors</label>
                    {errs}
                    <input type="submit" className="share-button" value="OK" onClick={this.props.closeModal}/>
                </form>
            )
        } else {
            modal = "shareform"
            return (
                <form className="share-doc-form modal-child" onClick={e => e.stopPropagation()} onSubmit={() => this.checkUser(type)} >
                    <label className="share-label">Share with others</label>
                    <label className="sub-share-label">Enter email and choose permission</label>
                    <div className="share-input-row">
                        <input className="share-input" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Enter email address..." />
                        <div className="share-dropdown" onClick={() => this.setState({ clicked: !this.state.clicked })}>
                            <img className="share-button-pen" src={`${this.state.type === "edit" ? window.editURL : window.viewURL}`}/>
                            <div className={`share-options ${this.state.clicked ? "share-on" : ""}`}>
                                <div className="share-option" onClick={() => this.setState({ type: "edit", clicked: !this.state.clicked })}>{this.state.type === "edit" ? (<div>✔</div>) : (<div></div>)}Can edit</div>
                                <div className="share-option" onClick={() => this.setState({ type: "view", clicked: !this.state.clicked })}>{this.state.type === "view" ? (<div>✔</div>) : (<div></div>)}Can view</div>
                            </div>
                        </div>
                    </div>
                    {/* <a className="share-link" onClick={() => this.props.openModal({ type: "share-permissions", docId: doc.id })}>See who you've shared with</a> */}
                    <a className="share-link" id="share-link" onClick={() => this.props.openModal({type: "share-permissions", docId: this.props.docId.id}) }>See who you've shared with</a>
                    <input type="submit" className="share-button" value="Done"/>
                </form>
            )

        }
    }
}

const msp = (state, ownProps) => {
    return {
        docId: state.entities.documents[ownProps.documentId],
        user: state.session.shareuser,
        errors: state.errors.session,

    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        createPermission: (permission) => dispatch(createPermission(permission)),
        removeErrors: () => dispatch(receiveErrors([])),
        fetchUser: (email) => dispatch(fetchUser(email))
    };
};

export default withRouter(connect(msp, mdp)(ShareDoc));

