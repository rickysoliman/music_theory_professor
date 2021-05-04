import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../loggedOut/LoginButton.js'

const Profile = () => {
    const { isAuthenticated, user } = useAuth0();
    
    return isAuthenticated ? (
        <div className="infoSquare">
            <div id="profile">
                <h1>{user.name}</h1>
                <img src={user.picture} alt={user.name}></img>
                <p>{user.email}</p>
            </div>
        </div>
    ) : (
        <div className="mustLogIn">
            <h2>Please log in to view your profile.</h2>
            <LoginButton message='Log In'/>
        </div>
    )
};

export default Profile;