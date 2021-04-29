import React from 'react';
import {
    NavLink,
    HashRouter
} from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <HashRouter>
                <a className="footerLinkImage" href="https://github.com/rickysoliman" target="_blank" rel="noreferrer">
                    <img alt="Github" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/GitHub-Mark-Light-120px-plus.png"></img>
                </a>
                <NavLink id="footerLogo" exact to="/">
                    <img alt="Music Theory Professor" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/musictheorylogo.png"></img>
                </NavLink>
                <a className="footerLinkImage" href="https://linkedin.com/in/ricky-marasigan" target="_blank" rel="noreferrer">
                    <img alt="LinkedIn" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/LI-In-Bug.png"></img>
                </a>
            </HashRouter>
        </div>
    )
};

export default Footer;