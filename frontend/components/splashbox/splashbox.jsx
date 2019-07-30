import React from 'react';
import { Link } from 'react-router-dom';

const Splashbox = () => {

    return (
        <div id="splashbox">
            <p id="splash-personal">Personal</p>
            <p id="splash-description">With lilDocs, you can write, edit, and collaborate wherever you are. For Free.</p>
            <button><Link to="/signin">Go to lilDocs</Link></button>
        </div>
    );
}

export default Splashbox