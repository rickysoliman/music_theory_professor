import React from 'react';
import LoginButton from './LoginButton';

const Home = () => {
    return (
        <div id="homePage">
            <div id="header">Level up your Music Theory skills today!</div>
            <div id="infoSquare">
                <h3>Music Theory Professor</h3>
                <p>is the best place to test your music theory knowledge and ear training abilities.</p>
                <LoginButton />
            </div>
        </div>
    )
}

export default Home;