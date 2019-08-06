import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/splash_navbar_container'
import Footer from '../auth/footer'

const Splashbox = () => {

    return (
        <>
        <NavbarContainer />
        <div id='long-center'>
            <div className="typewriter">
                <p>Create meaningful documents
                </p>
                <div id="lillian"></div>
            </div>
            <div id="splashbox">
                <p id="splash-personal">Personal</p>
                    <p><img id="doc-logo" src={window.docURL} /></p>
                <p id="splash-description">With lilDocs, you can write, edit, and collaborate wherever you are. For Free.</p>
                <button><Link to="/documents">Go to lilDocs</Link></button>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Splashbox