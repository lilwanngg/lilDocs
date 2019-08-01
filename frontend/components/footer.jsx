import React from 'react';

const Footer = () => {

    return (
        <footer className="splashfooter">
            <div className="follows">
                Follow: 
                <a href="https://github.com/lilwanngg/"><img className="smallicons" src={window.gitURL} /></a>
                <a href="https://github.com/lilwanngg/"><img className="smallicons" src={window.gitURL} /></a>
                <a href="https://github.com/lilwanngg/"><img className="smallicons" src={window.gitURL} /></a>
            </div>
        </footer>
    );
}

export default Footer
