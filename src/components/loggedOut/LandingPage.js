import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Footer from '../Footer';
import MoreLandingPageInfo from './MoreLandingPageInfo';
import QuizMenu from '../loggedIn/quizzes/QuizMenu';
import Profile from '../loggedIn/Profile';


const LandingPage = () => {
    return (
        <div id="landingPageContainer">
            <div id="landingPage">
                <HashRouter>
                    <div id="navBar">
                        <NavLink id="navBarLogo" exact to="/">
                            <img alt="Music Theory Professor" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/musictheorylogo.png"></img>
                        </NavLink>
                        <div id="navLinks">
                            <NavLink className="navLink" exact to="/">Home</NavLink>
                            <NavLink className="navLink" to="/about">About</NavLink>
                        </div>
                    </div>
                    <div id="loggedOutContent">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/quizzes" component={QuizMenu}/>
                        <Route path="/profile" component={Profile}/>
                    </div>
                </HashRouter>
            </div>
            <MoreLandingPageInfo/>
            <Footer/>
        </div>
    )
}

export default LandingPage;