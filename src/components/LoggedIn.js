import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Profile from './Profile';
import Footer from './Footer';

const LoggedIn = () => {
    return (
        <div id="loggedInContainer">
            <HashRouter>
                <div id="navBar">
                    <NavLink id="logo" exact to="/">
                        <img alt="Music Theory Professor" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/musictheorylogo.png"></img>
                    </NavLink>
                </div>
            </HashRouter>
            <Profile/>
            <Footer/>
        </div>
    );
};

export default LoggedIn;