import React from 'react'
import { connect } from 'react-redux'
// import { ShareButon } from './share_button'
import { Link } from 'react-router-dom'
import { logout } from "../../actions/session_actions"

class DocNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.doc
        this.state.clicked = true
        this.handlePicClick = this.handlePicClick.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handlePicClick() {
        
    }

    handleLogout() {
        this.props.logout()
    }

    render() {
        const { title } = this.state
        const { first_name, last_name, email  } = this.props.user
        return(
            < div className="doc-nav-bar sticky-nav" >
                <div className="doc-nav-left">
                    <Link to="/documents" className="doc-index-btn"><img className="doclogo" src={window.docURL} /></Link>
                    <input className={`doctitle ${title === "Untitled" ? "default-title" : ""} `} type="text" value={title} onChange={this.update('title')}/>
                </div>
                <div className="doc-nav-right">
                    {/* <ShareButton /> */}
                    {/* <button>&#128274; Share</button> */}
                    <div className="initialsCircle" id="dropdown-btn">
                        {first_name[0].toUpperCase()}
                    </div>
                    <div className={`account-dropdown`}>
                        <div className="tophalf">
                            <div className="initialsCircle">
                                {first_name[0].toUpperCase()}
                            </div>
                            <div className="account-info">
                                <p>{first_name} {last_name}</p>
                                <p>{email}</p>
                                <button className="back-to-docs">Back to Docs</button>
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