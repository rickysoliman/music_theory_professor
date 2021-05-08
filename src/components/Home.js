import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loggedOut/LoginButton';

const Home = () => {
    const { isAuthenticated, user } = useAuth0();
    const [data, setData] = useState([]);
    console.log(user);

    const getData = () => {
        axios.get('http://localhost:4000/getData')
            .then(res => setData(JSON.stringify(res.data)))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    /*
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
      getLanguages().then(data => {
         setLanguages(data.languages)
      });

      console.log(languages);
    }, []);
    */



    // getData();

    // logged in
    if (isAuthenticated) {
        return (
            <div id="loggedInHomePage">
                <h1 style={{ color: 'white' }}>Welcome back, {user.given_name || user.nickname}!</h1>
                <p style={{ color: 'white' }}>{user.email_verified ? '' : 'Make sure to verify your email.'}</p>
                <h1 id="postData">{data}</h1>
            </div>
        )
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
        )
    }
}

export default Home;