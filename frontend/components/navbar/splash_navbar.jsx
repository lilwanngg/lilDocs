import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ user, logout}) => {
    const display = user ? (
        <>
            
            <p>Hello, {user.first_name}</p>
            <button onClick={logout}>Log Out</button>
        </>
    ) : (
            <>
            </>
        )

    return (
        <header className="splash-nav-bar">
            <h1 id="logo">lilDocs</h1>
            <div id="splash-nav">

                {display}

            </div>

        </header>
    );
}

export default Navbar