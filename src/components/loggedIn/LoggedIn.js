import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import LogoutButton from './LogoutButton';
import Home from '../Home';
import Profile from './Profile';
import Footer from '../Footer';

const LoggedIn = () => {
    return (
        <div id="loggedInContainer">
            <HashRouter>
                <div id="navBar">
                    <NavLink id="logo" exact to="/">
                        <img alt="Music Theory Professor" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/musictheorylogo.png"></img>
                    </NavLink>
                    <div id="navLinks">
                        <LogoutButton/>
                        <NavLink className="navLink" to="/profile">Profile</NavLink>
                        <NavLink className="navLink" exact to="/">Home</NavLink>
                    </div>
                </div>
                <div id="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile}></Route>
                </div>
            </HashRouter>
            <Footer/>
        </div>
    );
};

export default LoggedIn;