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
        <>
        <div id="splash-nav-bar">
            <h1 id="logo">lilDocs</h1>
        </div>

    
        </>
    );
}

export default Navbar