import React, { Component } from 'react';
import NavigationButton from '../NavigationButton';
import Modal from '../Modal';

class QuizMenu extends Component {
    constructor() {
        super();

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
        const quizTypes = ['Note Names', 'Chords', 'Intervals'];
        const quizButtons = quizTypes.map(quiz => {
            return <NavigationButton key={quiz} onClick={this.handleSelection} type={quiz}/>;
        });
        return (
            <div id="quizMenu">
                <h1 style={{ color: 'white', margin: '20px' }}>What would you like to be quizzed on today?</h1>
                <div className="menuButtons">{quizButtons}</div>
                <Modal close={this.closeModal} quizType={this.state.quiz}/>
            </div>
        )
    }
};

export default QuizMenu;