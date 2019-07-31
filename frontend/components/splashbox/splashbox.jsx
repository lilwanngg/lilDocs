import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/splash_navbar_container'

const Splashbox = () => {

    return (
        <>
        <NavbarContainer />
        <div id='long-center'>
            <div className="typewriter">
                <p>Create meaningful documents</p>
            </div>
            <div id="splashbox">
                <p id="splash-personal">Personal</p>
                <p><img id="doc-logo" src="/assets/doc_logo.png" /></p>
                <p id="splash-description">With lilDocs, you can write, edit, and collaborate wherever you are. For Free.</p>
                <button><Link to="/signin">Go to lilDocs</Link></button>
            </div>
        </div>
        </>
    );
}

export default Splashbox