import React, { Component } from 'react';
import NavigationButton from '../NavigationButton';
import Modal from '../Modal';
import LoginButton from '../../loggedOut/LoginButton';

class QuizMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: null
        };

        this.handleSelection = this.handleSelection.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleSelection = e => {
        let quiz = e.target.id;
        this.setState({ quiz });
    }

    closeModal = () => {
        this.setState({
            quiz: null
        });
    }

    render() {
        if (this.props.authenticated) {
            const quizTypes = ['Note Names', 'Chords', 'Intervals'];
            const quizButtons = quizTypes.map(quiz => {
                return <NavigationButton key={quiz} onClick={this.handleSelection} type={quiz}/>;
            });
            return (
                <div id="quizMenu">
                    <h1 style={{ color: 'white', margin: '20px' }}>What would you like to be quizzed on today?</h1>
                    <div className="menuButtons">{quizButtons}</div>
                    <Modal id={this.props.id} close={this.closeModal} quizType={this.state.quiz}/>
                </div>
            )
        } else {
            return (
                <div className="mustLogIn">
                    <h2>Please log in to view our quizzes.</h2>
                    <LoginButton message='Log In'/>
                </div>
            )
        }
    }
};

export default QuizMenu;