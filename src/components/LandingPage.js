import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import LoginButton from './LoginButton';
import Home from './Home';

const LandingPage = () => {
    return (
        <div id="landingPage">
            <HashRouter>
                <div id="navBar">
                    <NavLink id="logo" exact to="/">
                        <img alt="Music Theory Professor" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/musictheorylogo.png"></img>
                    </NavLink>
                </div>
                <div id="content">
                    <Route exact path="/" component={Home}/>
                </div>
            </HashRouter>
        </div>
    )
}

export default LandingPage;