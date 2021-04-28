import React from 'react';

const About = () => {
    return (
        <div id="about">
            <div className="infoSquare">
                <h2>Music Theory Professor</h2>
                <p>is the creation of Software Engineer <b>Ricky Marasigan.</b></p>
                <p>Ricky has studied music theory extensively in college and has</p>
                <p>worked as a piano teacher for many years. He found that</p>
                <p>when making the transition from piano teacher into</p>
                <p>software engineer, there was a level of passion</p>
                <p>that he had only ever felt when learning music theory.</p>
                <p>As a consequence, he decided to create a project that</p>
                <p>combined his two loves into one.</p>
            </div>
            <div className="aboutPageMedia">
                <img alt="profilePic" id="profilePic" src="https://avatars.githubusercontent.com/u/68708484?v=4"></img>
                <a className="github" href="https://github.com/rickysoliman" target="_blank" rel="noreferrer">
                    <img id="githubAbout" alt="Github" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/GitHub-Mark-120px-plus.png"></img>
                </a>
            </div>
        </div>
    )
}

export default About;