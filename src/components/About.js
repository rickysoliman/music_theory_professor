import React from 'react';
import LoginButton from './loggedOut/LoginButton';

const About = () => {
    const description = `
        is the creation of Software Engineer Ricky Marasigan. Ricky has studied music theory extensively in college and has worked as a piano teacher for many years. He found that when making the transition from piano teacher into software engineer, there was a level of passion that he had only ever felt when learning music theory. As a consequence, he decided to create a project that combined his two loves into one. You can find his Github and LinkedIn pages below:
    `;
    return (
        <div id="about">
            <div className="infoSquare">
                <h2>Music Theory Professor</h2>
                <p style={{
                    width: '50%',
                    margin: '0px, 25px',
                    textAlign: 'center'
                }}>{description}</p>
                <img style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '10px',
                    border: '2px solid black',
                    margin: '10px'
                }} alt="profilePic" id="profilePic" src="https://avatars.githubusercontent.com/u/68708484?v=4"></img>
                <div className="aboutPageMedia">
                    <a className="github" href="https://github.com/rickysoliman" target="_blank" rel="noreferrer">
                        <img id="githubAbout" alt="Github" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/GitHub-Mark-120px-plus.png"></img>
                    </a>
                    <a className="linkedin" href="https://linkedin.com/in/ricky-marasigan" target="_blank" rel="noreferrer">
                        <img id="linkedinAbout" alt="LinkedIn" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/LI-In-Bug.png"></img>
                    </a>
                </div>
                <LoginButton message='Get started with Music Theory Professor' />
            </div>
        </div>
    )
}

export default About;