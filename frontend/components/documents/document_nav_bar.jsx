import React from 'react'
import { connect } from 'react-redux'
// import { ShareButon } from './share_button'
import { withRouter } from 'react-router-dom'

class DocNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.doc

    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        const { title } = this.state
        const { first_name, last_name  } = this.props.user
        return(
            < div className="doc-nav-bar" >
                <div className="doc-nav-left">
                    <img className="doclogo" src={window.docURL}/>
                    <input className={`doctitle ${title === "Untitled" ? "default-title" : ""} `} type="text" value={title} onChange={this.update('title')}/>
                </div>
                <div className="doc-nav-right">
                    {/* <ShareButton /> */}
                    {/* <button>&#128274; Share</button> */}
                    <div className="initialsCircle">
                        <p>{first_name[0].toUpperCase()}{last_name[0].toUpperCase()}</p>
                    </div>
                    <div className="account-dropdown">
                        
                    </div>
                </div>
            </div >
        )

    }

}

export default DocNavBar