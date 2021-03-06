import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from "../../actions/session_actions"
import { openModal } from '../../actions/modal_actions'

class DocNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {doc: this.props.doc, clicked: false}
        this.handlePicClick = this.handlePicClick.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.debouncedUpdate = this.debounce(this.props.updateDocument, 2000)
    }

    update(field) {
        const { id } = this.props.doc
        const { content } = this.state
        return (e) => {
            this.debouncedUpdate({ id, title: e.target.value, content }),
            this.setState({doc: {[field]: e.target.value}})
        }
    }

    debounce(func, time) {
        let timeout
        return function () {
            const call = () => func.apply(this, arguments)
            clearTimeout(timeout)
            timeout = setTimeout(call, time)
        }
    }


    componentWillMount () {
        document.addEventListener("mousedown", this.handleClick, false)
    }

    componentWillUnmount () {
        document.removeEventListener("mousedown", this.handleClick, false)
    }

    handleClick (e) {
        if (this.state.clicked && ((this.dropdownRef.contains(e.target)))) {
            return
        } else if (!this.state.clicked && !this.iconRef.contains(e.target)) {
            return
        }
        this.handlePicClick();
    }

    handlePicClick() {
        this.setState({clicked: !(this.state.clicked)})
    }

    handleLogout() {
        this.props.logout()
    }

    selectAll(title) {
        document.getElementById(title).focus()
        document.getElementById(title).select()
    }

    render() {
        const { doc, clicked } = this.state
        const { first_name, last_name, email, id  } = this.props.user
        const topLogo = doc ? (
            <input onClick={() => this.selectAll('title')} id="title" className={`doctitle ${doc.title === "Untitled document" ? "default-title" : ""} `} type="text" value={doc.title} 
            onChange={this.update('title')} />
        ) : (
            <p id="nav-logo"><img src={window.lilDocsURL}/></p>
        )
        let shareButton
        let viewOrEdit
        if (this.props.type === "edit" && doc.user_id === id ){
            shareButton = doc ? (<button className="doc-share" onFocus={() => this.props.openModal({ type: "share", docId: doc.id })}>Share</button>) : (<></>)
            viewOrEdit = (<div className="view-or-edit"><img src={window.editingURL} />Editing</div>)
        } else if (this.props.type === "view") {
            shareButton = (<></>)
            viewOrEdit = (<div className="view-or-edit"><img src={window.viewingURL} />Viewing</div>)
        } else if (this.props.type === "edit" && doc.user_id !== id) {
            shareButton = (<></>)
            viewOrEdit = (<div className="view-or-edit"><img src={window.editingURL} />Editing</div>)
        } else {
            shareButton = (<></>)
        }
        const dispTime = new Date(this.props.updatedAt)
        let time = dispTime.toTimeString().split(' ')[0].slice(0, -3)
        let hour = parseInt(time.slice(0,2))
        let after = " PM"
        hour > 12 ? hour = (hour % 12) : after = " AM"
        hour === 0 ? hour = 12 : hour = hour
        time = hour.toString() + time.slice(2) + after
        const updatedAt = doc ? (<div className="updated-at">Last edit was {dispTime.toDateString()} {time}</div>) : (<></>)
        
        return(
            < div className="doc-nav-bar sticky-nav" >
                <div className="doc-nav-left">
                    <Link to="/documents" className="doc-index-btn"><img className="doclogo" src={window.docURL} /></Link>
                    <div>
                        {topLogo}
                        {updatedAt}  
                    </div>
                </div>
                <div className="doc-nav-right">
                    {shareButton}
                    {viewOrEdit}
                    <div ref={iconRef => this.iconRef = iconRef} className="initialsCircle" id="dropdown-btn">
                        {first_name[0].toUpperCase()}
                    </div>
                    <div ref={dropdownRef => this.dropdownRef = dropdownRef} className={`account-dropdown ${clicked ? "show" : ""}`}>
                        <div className="tophalf">
                            <div className="initialsCircle">
                                {first_name[0].toUpperCase()}
                            </div>
                            <div className="account-info">
                                <p>{first_name} {last_name}</p>
                                <p>{email}</p>
                            { doc ? (<Link to="/documents" className="back-to-docs">Back to Docs</Link>) : (<></>) }
                            </div>
                        </div>
                        <div className="signout-bar">
                            <button onClick={this.handleLogout} className="sign-out-btn">Sign out</button>
                        </div>
                    </div>
                </div>
            </div >
        )

    }

}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
})


export default connect(null, mdp) (DocNavBar)