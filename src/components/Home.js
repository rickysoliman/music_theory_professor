import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loggedOut/LoginButton';

const Home = () => {
    const { isAuthenticated, user } = useAuth0();
    const [ data, setData ] = useState([]);
    console.log(user);

    // retrieves all data on user via email
    const getData = email => {
        axios.get(`/getByEmail/${email}`)
            .then(res => {
                console.log(res.data);
                setData(JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
    };

    // posts the user in the database (if not already there)
    const postData = user => {
        let data = {
            firstName: user.given_name,
            lastName: user.family_name,
            email: user.email,
            quizScores: []
        };
        axios.post('/postData', data)
            .then(() => {
                console.log('posted data');
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (!isAuthenticated) return null;

        let isMounted = true;

        axios.get(`/getByEmail/${user.email}`)
            .then(res => {
                let data = res.data;
                if (data.length === 0) {
                    console.log('new user');
                    postData(user);
                } else {
                    console.log('user already exists');
                }
            })
            .catch(err => {
                console.log(err);
            });

        return () => isMounted = false;
    }, []);

    // logged in
    if (isAuthenticated) {
        return (
            <div id="loggedInHomePage">
                <h1 style={{ color: 'white' }}>Welcome back, {user.given_name || user.nickname}!</h1>
                <p style={{ color: 'white' }}>{user.email_verified ? '' : 'Make sure to verify your email.'}</p>
                <div style={{ color: 'white' }}>{data}</div>
            </div>
        );
    // not logged in
    } else {
        return (
            <div id="loggedOutHomePage">
                <div id="header">Level up your Music Theory skills today!</div>
                <div className="infoSquare">
                    <h3>Music Theory Professor</h3>
                    <p>is the best place to test your music theory knowledge and ear training abilities.</p>
                    <LoginButton message='Get Started!' />
                </div>
            </div>
        );
    };
};

export default Home;