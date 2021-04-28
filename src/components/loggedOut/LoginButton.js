import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button href="/" id="loginButton" onClick={() => loginWithRedirect()}>
                Login/Register
            </button>
        )
    );
}

export default LoginButton;