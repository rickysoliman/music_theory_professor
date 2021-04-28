import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loggedOut/LoginButton';

const Home = () => {
    const { isAuthenticated } = useAuth0();

    // logged in
    if (isAuthenticated) {
        return <div>Home</div>
    // not logged in
    } else {
        return (
            <div id="homePage">
                <div id="header">Level up your Music Theory skills today!</div>
                <div className="infoSquare">
                    <h3>Music Theory Professor</h3>
                    <p>is the best place to test your music theory knowledge and ear training abilities.</p>
                    <LoginButton />
                </div>
            </div>
        )
    }
}

export default Home;