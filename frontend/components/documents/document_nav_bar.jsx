import React from 'react'
import { connect } from 'react-redux'
// import { ShareButton } from './share_button'
import { Link } from 'react-router-dom'
import { logout } from "../../actions/session_actions"

class DocNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {doc: this.props.doc, clicked: false}
        this.handlePicClick = this.handlePicClick.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
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

    render() {
        const { doc, clicked } = this.state
        const { first_name, last_name, email  } = this.props.user
        let topLogo = doc ? (
            <input className={`doctitle ${doc.title === "Untitled" ? "default-title" : ""} `} type="text" value={doc.title} onChange={this.update('title')} />
        ) : (
            <p id="nav-logo"><img src={window.lilDocsURL}/></p>
        )
        return(
            < div className="doc-nav-bar sticky-nav" >
                <div className="doc-nav-left">
                    <Link to="/documents" className="doc-index-btn"><img className="doclogo" src={window.docURL} /></Link>
                    {topLogo}
                </div>
                <div className="doc-nav-right">
                    {/* <ShareButton /> */}
                    {/* <button>&#128274; Share</button> */}
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
                                <Link to="/documents" className="back-to-docs">Back to Docs</Link>
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
    logout: () => dispatch(logout())
})


export default connect(null, mdp) (DocNavBar)