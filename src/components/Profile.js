import React from 'react';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    if (user) console.log(user);
    return (
        isAuthenticated && (
            <>
                <h1>{user.name}</h1>
                <img src={user.picture} alt={user.name}></img>
                <p>{user.email}</p>
                <LogoutButton/>
            </>
        )
    )
}

export default Profile;