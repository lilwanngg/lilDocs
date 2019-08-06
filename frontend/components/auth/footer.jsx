import React from 'react';

const Footer = () => {

    return (
        <footer className="splashfooter">
            <div className="follows">
                Follow: 
                <a href="https://github.com/lilwanngg/"><img className="smallicons" id="git" src={window.gitURL} /></a>
                <a href="https://www.linkedin.com/in/lillianwang97/"><img className="smallicons" src={window.linkedInURL} /></a>

            </div>
        </footer>
    );
}

export default Footer
