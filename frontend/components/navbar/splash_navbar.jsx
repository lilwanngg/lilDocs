import React from 'react';
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { clicked: false }
        // this.handlePicClick = this.handlePicClick.bind(this)
        // this.handleLogout = this.handleLogout.bind(this)
        // this.handleClick = this.handleClick.bind(this)
    }

    // componentWillMount() {
    //     document.addEventListener("mousedown", this.handleClick, false)
    // }

    // componentWillUnmount() {
    //     document.removeEventListener("mousedown", this.handleClick, false)
    // }

    // handleClick(e) {
    //     if (this.state.clicked && ((this.dropdownRef.contains(e.target)))) {
    //         return
    //     } else if (!this.state.clicked && !this.iconRef.contains(e.target)) {
    //         return
    //     }
    //     this.handlePicClick();
    // }

    // handlePicClick() {
    //     this.setState({ clicked: !(this.state.clicked) })
    // }

    // handleLogout() {
    //     this.props.logout()
    // }

    render() {

        return (
            <>
            
            <div className="doc-nav-bar sticky-nav" >
                <div className="splash-nav-bar">
                    <h1 className="logo">lilDocs</h1>
                </div>

                <div className="doc-nav-right">
                </div>
            </div >
            </>
        )

    }

}

export default Navbar