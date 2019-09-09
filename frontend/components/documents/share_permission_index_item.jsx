import React from 'react'


class ShareIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { type: this.props.perm.permission_type, open: false }
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleViewClick = this.handleViewClick.bind(this)

    }

    handleEditClick() {
        const { perm } = this.props
        this.setState({ type: "edit", open: !this.state.open })
        this.props.updateDocPermission( {id: perm.id, doc_id: perm.doc_id, user_id: perm.user_id, permission_type: "edit"})
    }
    
    handleViewClick() {
        const { perm } = this.props
        this.setState({ type: "view", open: !this.state.open })
        this.props.updateDocPermission( {id: perm.id, doc_id: perm.doc_id, user_id: perm.user_id, permission_type: "view"})
    }

    render ()  {
        const { perm, doc } = this.props
        return (
            <div className="user-share" onClick={e => e.stopPropagation()}>
                <div className="left-info">
                    <div className="initialsCircle">
                        {perm.user.first_name[0].toUpperCase()}
                    </div>
                    <div className="user-info">
                        <div className="user-name">
                            {perm.user.first_name + " " + perm.user.last_name}
                        </div>
                        <div className="user-email">
                            {perm.user.email}
                        </div>
                    </div>
                </div>
                <div className="share-right">
                    {doc.user_id === perm.user.id ? (<div className="perm-dropdown">Is owner</div>) : (
                        <>
                        <div className="perm-dropdown" onClick={() => this.setState({ open: !this.state.open })}>
                            <img className="share-button-pen perm-pen" src={`${this.state.type === "edit" ? window.editURL : window.viewURL}`} />
                            <div className={`perm-options ${this.state.open ? "share-perms-on" : ""}`}>
                                <div className="perm-option" onClick={this.handleEditClick}>{this.state.type === "edit" ? (<div>✔</div>) : (<div></div>)}Can edit</div>
                                <div className="perm-option" onClick={this.handleViewClick}>{this.state.type === "view" ? (<div>✔</div>) : (<div></div>)}Can view</div>
                            </div>
                        </div>
                        <div className="delete-perm" onClick={ () => this.props.deleteDocPermission(perm)}>
                            X
                        </div>
                        </>
                    )}
                </div>

            </div>
        )
    }
}


export default ShareIndexItem