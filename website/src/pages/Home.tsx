import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <img className="profile-pic" src="../media/ios7nebula.png" alt="Profile Picture" />
            <div className="bio">
                <h1>Hi 👋</h1>
                <p>
                    Welcome to my website! I'm currently a 4th year Mechatronics Engineering student at the University of Waterloo.
                </p>
            </div>
        </div>
    );
}

export default Home;