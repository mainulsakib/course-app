import React from 'react';
import './Header.css'

const Header = () => {
    return (
     <div >
            <div className="bannerSection">
            <h1>Learner's Hub</h1>
            <p><small>Learn Anything</small></p>
        </div>
        <div className="link">
            <a href="Course">Course</a>
            <a href="Purchase">Purchase</a>
        </div>
     </div>
    );
};

export default Header;