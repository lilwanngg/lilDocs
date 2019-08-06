import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ user, logout}) => {
    const display = user ? (
        <div className="initials">
            <p>{user.first_name[0].toUpperCase()}{user.last_name[0].toUpperCase()}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <>
            </>
        )

    return (
        <>
        <div className="splash-nav-bar">
            <h1 className="logo">lilDocs</h1>
            {display}
        </div>


    
        </>
    );
}

export default Navbar