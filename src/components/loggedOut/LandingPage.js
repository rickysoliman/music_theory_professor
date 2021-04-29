import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from '../Home';
import About from './About';
import Footer from '../Footer';
import MoreLandingPageInfo from './MoreLandingPageInfo';

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
                            <NavLink className="navLink" to="/about">About</NavLink>
                            <NavLink className="navLink" exact to="/">Home</NavLink>
                        </div>
                    </div>
                    <div id="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}></Route>
                    </div>
                </HashRouter>
            </div>
            <MoreLandingPageInfo/>
            <Footer/>
        </div>
    )
}

export default LandingPage;