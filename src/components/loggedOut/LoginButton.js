import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = props => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { message } = props;

    return (
        !isAuthenticated && (
            <button href="/" id="loginButton" onClick={() => loginWithRedirect()}>
                {message}
            </button>
        )
    );
};

export default LoginButton;