import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import Home from '../Home';
import Profile from './Profile';
import Footer from '../Footer';
import About from '../About';
import QuizMenu from './quizzes/QuizMenu';
import Courses from './courses/Courses';

const LoggedIn = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div id="loggedInContainer">
            <HashRouter>
                <div id="navBar">
                    <NavLink id="logo" exact to="/">
                        <img alt="Music Theory Professor" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/musictheorylogo.png"></img>
                    </NavLink>
                    <div id="navLinks">
                        <div id="leftLinks"></div>
                        <div id="centerLinks">
                            <NavLink className="navLink" to="/quizzes">Quizzes</NavLink>
                            <NavLink className="navLink" to="/courses">Courses</NavLink>
                            <NavLink className="navLink" exact to="/">Home</NavLink>
                        </div>
                        <div id="rightLinks">
                            <LogoutButton />
                            <NavLink className="navLink" to="/about">About</NavLink>
                            <NavLink className="navLink" to="/profile">Profile</NavLink>
                        </div>
                    </div>
                </div>
                <div id="loggedInContent">
                    <Route path="/quizzes" render={() => <QuizMenu authenticated={isAuthenticated}/>} />
                    <Route path="/courses" component={Courses} />
                    <Route exact path="/" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/about" component={About}/>
                </div>
            </HashRouter>
            <Footer/>
        </div>
    );
};

export default LoggedIn;