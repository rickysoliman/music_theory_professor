import React, { Component } from 'react';
import Piano from '../Piano'

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: {
                'Note Names': [
                    'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'
                ],
                'Chords': [],
                'Intervals': []
            },
            answers: [],
            pendingAnswer: null,
            index: 0,
            inProgress: false
        };

        this.shuffle = this.shuffle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.deselect = this.deselect.bind(this);
        this.begin = this.begin.bind(this);
        this.end = this.end.bind(this);
    }

    componentDidMount = () => {
        let questions = this.state.questions[this.props.quizType];
        this.shuffle(questions);
    }

    shuffle = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    handleClick = note => {
        let pendingAnswer = note;
        this.setState({ pendingAnswer });
    }

    submitAnswer = () => {
        if (!this.state.pendingAnswer) return null;
        let note = this.state.pendingAnswer;
        let answers = this.state.answers;
        answers.push(note);

        let { index } = this.state, questions = this.state.questions[this.props.quizType];

        index++;
        if (index === questions.length) {
            this.end();
        } else {
            this.setState({
                index, 
                answers,
                pendingAnswer: null
            });
        }
    }

    deselect = () => {
        this.setState({ pendingAnswer: null }, () => console.log('deselected'));
    }

    begin = () => {
        this.setState({
            inProgress: true
        });
    }

    end = () => {
        this.setState({
            inProgress: false
        });
    }

    render() {
        const quizType = this.props.quizType, questions = this.state.questions[quizType];
        let index = this.state.index;

        const intros = {
            'Note Names': 'Welcome to the note names quiz!',
            'Chords': 'Welcome to the chords quiz!',
            'Intervals': 'Welcome to the intervals quiz!'
        };

        const outro = 'Good job!';

        // quiz is not in progress
        if (!this.state.inProgress) {
            // quiz hasn't begun
            if (this.state.index === 0) {
                return (       
                    <div className='quiz'>
                        <h2>{intros[quizType]}</h2>
                        <button onClick={this.begin}>Begin Quiz</button>
                    </div>
                )
            // quiz is over
            } else {
                return (
                    <>
                        <div>{outro}</div>
                    </>
                )
            }
        // quiz is in progress
        } else {
            return (
                <div className='quiz'>
                    <div>{questions[index]}</div>
                    <Piano deselect={this.deselect} submitAnswer={this.submitAnswer} onClick={this.handleClick}/>
                    {/* <button onClick={this.submitAnswer}>Submit</button> */}
                </div>
            )
        }
    };
};

export default Quiz;