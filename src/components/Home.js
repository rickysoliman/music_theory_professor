import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loggedOut/LoginButton';

const Home = () => {
    const { isAuthenticated, user } = useAuth0();
    const [ data, setData ] = useState([]);
    const [ postRequestData, setPostRequestData ] = useState({});
    console.log(user);

    const handleChange = e => {
        let value = document.getElementById(e.target.id).value;
        setPostRequestData(value);
        console.log(postRequestData);
    };

    const getData = () => {
        axios.get('http://localhost:3001/getData')
            .then(res => {
                console.log(res.data);
                setData(JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
    };

    const postData = data => {
        axios.post('http://localhost:3001/postData', JSON.parse(data))
            .then(() => {
                console.log('posted data');
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

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
                {/* <input type="text" id="data" onChange={handleChange}></input>
                <button onClick={() => postData(postRequestData)}>Post</button> */}
            </div>
        )
    }
}

export default Home;