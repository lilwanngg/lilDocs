import { connect } from 'react-redux';
import React from 'react';
import { fetchUser, receiveErrors } from '../../actions/session_actions'
import { createPermission, fetchPermission, deleteDocPermission, updateDocPermission, fetchPermissions, fetchDocPermissions } from '../../actions/permission_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'
import SharePermissionIndexItem from './share_permission_index_item'

class SharePermissions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { docPermissions: this.props.docPermissions, docId: this.props.docId.id, email: "", type: "edit", clicked: false }
        this.checkUser = this.checkUser.bind(this)
    }

    componentDidMount() {
        this.props.fetchDocPermissions(this.props.docId).then( (perms) => {
            this.props.removeErrors() })
        this.props.fetchPermissions()
    }

    checkUser(type) {
        this.props.fetchUser({ email: this.state.email, docId: this.props.documentId, type: type }).then(() => this.props.closeModal())
    }


    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        debugger
        if (!this.props.docPermissions.length) {return null}
        let { type } = this.state
        const { errors, deleteDocPermission, updateDocPermission, docId, closeModal, docPermissions } = this.props
        debugger
        const sharedUsers = docPermissions.map( (perm, idx) => {
            debugger
            return (
                    <li className="shared-users" key={`perm${idx}`}>
                        <SharePermissionIndexItem 
                        perm={perm}
                        deleteDocPermission={deleteDocPermission} 
                        updateDocPermission={updateDocPermission}
                        doc={docId}/>
                    </li>
                )
        })
        const errs = errors.map((err, idx) => { return (<li className="share-errors" key={`err${idx}`}>{err}</li>) })
        if (errs.length) {
            return (
                <form className="share-doc-form modal-child" onClick={e => e.stopPropagation()}>
                    <label className="share-label">Errors</label>
                    {errs}
                    <input type="submit" className="share-button" value="OK" onClick={this.props.closeModal} />
                </form>
            )
        } else {
            return (
                <div className="share-permissions-all modal-child" onClick={e => e.stopPropagation()}>
                    <label className="share-label share-perm-label">Sharing settings</label>
                    <div className="top-half-div">
                        <div className="existing-permissions">
                            <ul>
                                {sharedUsers}
                            </ul>
                        </div>
                        <button onClick={closeModal} className="share-button perm-button ok-button">OK</button>
                    </div>
                    <form className="share-perm-form " onClick={e => e.stopPropagation()} onSubmit={() => this.checkUser(type)} >
                        <label className="sub-share-label sub-perm-label">Invite someone:</label>
                        <div className="share-input-row perm-input-row">
                            <input className="share-input perm-input" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Enter email address..." />
                            <div className="share-dropdown perm-dropdown" onClick={() => this.setState({ clicked: !this.state.clicked })}>
                                <div className="button-border"><img className="share-button-pen perm-pen" src={`${this.state.type === "edit" ? window.editURL : window.viewURL}`} /></div>
                                <div className={`share-options ${this.state.clicked ? "share-on" : ""}`}>
                                    <div className="share-option" onClick={() => this.setState({ type: "edit", clicked: !this.state.clicked })}>{this.state.type === "edit" ? (<div>✔</div>) : (<div></div>)}Can edit</div>
                                    <div className="share-option" onClick={() => this.setState({ type: "view", clicked: !this.state.clicked })}>{this.state.type === "view" ? (<div>✔</div>) : (<div></div>)}Can view</div>
                                </div>
                            </div>
                        </div>
                        
                        <input type="submit" className="share-button perm-button" value="Send" />
                    </form>
                </div>
            )

        }
    }
}

const msp = (state, ownProps) => {
    debugger
    return {
        docId: state.entities.documents[ownProps.documentId],
        user: state.session.shareuser,
        errors: state.errors.session,
        docPermissions: Object.values(state.entities.permissions.doc)

    };
    debugger
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        createPermission: (permission) => dispatch(createPermission(permission)),
        fetchPermission: (id) => dispatch(fetchPermission(id)),
        fetchPermissions: () => dispatch(fetchPermissions()),
        removeErrors: () => dispatch(receiveErrors([])),
        fetchUser: (email) => dispatch(fetchUser(email)),
        deleteDocPermission: (perm) => dispatch(deleteDocPermission(perm)),
        updateDocPermission: (permission) => dispatch(updateDocPermission(permission)),
        fetchDocPermissions: (doc) => dispatch(fetchDocPermissions(doc))
    };
};

export default withRouter(connect(msp, mdp)(SharePermissions));

