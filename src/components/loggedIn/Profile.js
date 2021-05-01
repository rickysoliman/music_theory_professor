import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

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
        <div>Please log in</div>
    )
};

export default Profile;