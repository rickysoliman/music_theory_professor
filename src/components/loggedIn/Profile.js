import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../loggedOut/LoginButton.js'
import axios from 'axios';

const Profile = () => {
    const { isAuthenticated, user } = useAuth0();
    let [ quizScores, setQuizScores ] = useState([]);

    const getQuizScores = () => {
        let { email } = user;

        axios.get(`/getQuizScores/${email}`)
            .then(res => {
                setQuizScores(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getQuizScores();
    }, []);

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
            let average = totalScore / count;
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
        let scores = calculateQuizAverages(quizScores);

        let averages = scores.map((quiz, i) => {
            let { quizType, average } = quiz;
            return (
                <div key={i}>
                    <div><b>{quizType} average score:</b></div>
                    <div>{average}%</div>
                </div>
            );
        });
        return (
            <div className="infoSquare">
                <div id="profile">
                    <h1>{user.name}</h1>
                    <img src={user.picture} alt={user.name}></img>
                    <div id="quizScores">{scores.length === 0 ? <p>You haven't taken any quizzes yet, {user.given_name || user.nickname}!</p> : averages}</div>
                </div>
            </div>
        )
    
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