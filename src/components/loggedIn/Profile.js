import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../loggedOut/LoginButton.js';
import EditAccountInfo from './EditAccountInfo';
import axios from 'axios';

const Profile = props => {
    const { isAuthenticated, user } = useAuth0();
    console.log(user);
    let [ quizScores, setQuizScores ] = useState([]);
    let [ edit, setEdit ] = useState(false);

    const changeFirstName = name => {
        user.firstName = name;
    };

    const changeLastName = name => {
        user.lastName = name;
    };

    const save = () => {
        let { firstName, lastName } = user, id = props.id;
        let obj = {
            firstName,
            lastName,
            id
        };
        console.log({ obj });
        axios.post('/changeName', obj)
            .then(res => {
                setEdit(false);
                // res.end();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getQuizScores = () => {
        let { email } = user;

        axios.get(`/getQuizScores/${email}`)
            .then(res => {
                setQuizScores(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(getQuizScores, []);

    const calculateQuizAverages = scores => {
        if (quizScores.length === 0) return [];

        let averages = {
            'Note Names': {
                count: 0,
                totalScore: 0,
                averageScore: 0
            },
            'Chords': {
                count: 0,
                totalScore: 0,
                averageScore: 0
            },
            'Intervals': {
                count: 0,
                totalScore: 0,
                averageScore: 0
            }
        };

        for (let i = 0; i < scores.length; i++) {
            let quiz = scores[i];
            let { quizType, score } = quiz;
            averages[quizType].count++;
            averages[quizType].totalScore += score;
        }

        let averageScores = [];

        for (let quizType in averages) {
            let quiz = averages[quizType];
            let { count, totalScore } = quiz;
            let average = count === 0 && totalScore === 0 ? 'No attempts' : (totalScore / count).toString() + '%';
            quiz.averageScore = average;
            let obj = {
                quizType,
                average
            };
            averageScores.push(obj);
        }
        return averageScores;
    };
    
    // logged in
    if (isAuthenticated) {
        if (!edit) {
            let scores = calculateQuizAverages(quizScores);

            let averages = scores.map((quiz, i) => {
                let { quizType, average } = quiz;
                return (
                    <div key={i}>
                        <div><b>{quizType} average score:</b></div>
                        <div>{average}</div>
                    </div>
                );
            });
            return (
                <div className="infoSquare">
                    <div id="profile">
                        <h1>{'nickname' in user ? user.name : `${user.firstName} ${user.lastName}`}</h1>
                        <button style={{
                            float: 'right',
                            color: '#f7ecdb',
                            backgroundColor: '#1a1515',
                            borderRadius: '5px',
                            border: 'transparent',
                            padding: '20px',
                            fontFamily:'Arial',
                            transition: 'box-shadow 0.25s'
                        }} onClick={() => setEdit(true)}>Edit Profile Info</button>
                        <img style={{ width: '200px', height: '200px' }} src={user.picture} alt={user.name}></img>
                        <div id="quizScores">{scores.length === 0 ? <p>You haven't taken any quizzes yet, {user.given_name || user.nickname}!</p> : averages}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="infoSquare">
                    <EditAccountInfo save={save} changeFirstName={changeFirstName} changeLastName={changeLastName} user={user}/>
                </div>
            );
        }
    
    // not logged in
    } else {
        return (
            <div className="mustLogIn">
                <h2>Please log in to view your profile.</h2>
                <LoginButton message='Log In'/>
            </div>
        );
    };
};

export default Profile;