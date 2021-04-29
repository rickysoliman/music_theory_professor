import React from 'react';
import LoginButton from './LoginButton';

const MoreLandingPageInfo = () => {
    return (
        <div id="moreLandingPageInfo">
            <img id="moreInfoLogo" alt="Music Theory Professor" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/musictheorylogoblack.png"></img>
            <div id="learnNoteNames">
                <h3 style={{ margin: '20px' }}>Are you just starting out? <br></br>Test your memory of the keyboard note names!</h3>
                <img alt="note names" style={{ borderRadius: '5px', margin: '20px' }} src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/note+names.jpg"></img>
            </div>
            <div id="learnChords">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img alt="chords" style={{ borderRadius: '5px', border: '3px solid black', margin: '20px' }} src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/C+Major.jpg"></img>
                    <p><b>C Major</b></p>
                </div>
                <h3 style={{ margin: '20px' }}>Maybe you're a little more advanced? <br></br>Quiz yourself on chord structure!</h3>
            </div>
            <div>
                <div id="learnIntervals">
                    <h3>If you're really an expert, <br></br>Test your knowledge of intervals too!</h3>
                    <img alt="intervals" style={{ borderRadius: '5px', border: '3px solid black', margin: '20px' }} src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/major+third.jpg"></img>
                </div>
            </div>
            <h3 style={{
                width: '30%',
                margin: '20px'
            }}><b>Music Theory Professor</b> will help you ace your music theory courses, or just help you get better at piano, guitar or any instrument you desire!</h3>
            <LoginButton message='Click here to get started!' />
        </div>
    );
};

export default MoreLandingPageInfo;