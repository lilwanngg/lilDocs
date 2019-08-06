import React from 'react';
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
        this.handlePicClick = this.handlePicClick.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        document.addEventListener("mousedown", this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClick, false)
    }

    handleClick(e) {
        if (this.state.clicked && ((this.dropdownRef.contains(e.target)))) {
            return
        } else if (!this.state.clicked && !this.iconRef.contains(e.target)) {
            return
        }
        this.handlePicClick();
    }

    handlePicClick() {
        this.setState({ clicked: !(this.state.clicked) })
    }

    handleLogout() {
        this.props.logout()
    }

    render() {
        const { clicked } = this.state
        const { first_name, last_name, email } = this.props.user
        return (
            <>
            
            <div className="doc-nav-bar sticky-nav" >
                <div className="splash-nav-bar">
                    <h1 className="logo">lilDocs</h1>
                </div>
                <div className="doc-nav-right">
                    {/* <ShareButton /> */}
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
            </>
        )

    }

}

export default Navbar