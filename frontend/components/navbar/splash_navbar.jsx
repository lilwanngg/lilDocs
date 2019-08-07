import React from 'react';
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

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