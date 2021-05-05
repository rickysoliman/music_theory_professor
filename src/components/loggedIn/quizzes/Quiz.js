import React, { Component } from 'react';
import Piano from '../Piano';
import QuestionsAndAnswers from './QuestionsAndAnswers';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: QuestionsAndAnswers,
            noteLimit: { 'Note Names': 1, 'Chords': 3, 'Intervals': 1 },
            answers: [],
            pendingAnswer: this.props.quizType === 'Chords' ? [] : null,
            index: 0,
            inProgress: false
        };

        this.shuffle = this.shuffle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.deselect = this.deselect.bind(this);
        this.begin = this.begin.bind(this);
        this.end = this.end.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
        this.compareArrays = this.compareArrays.bind(this);
        this.calculateGrade = this.calculateGrade.bind(this);
        this.returnToHome = this.returnToHome.bind(this);
        this.mostRecentlySelected = this.mostRecentlySelected.bind(this);
    }

    calculateScore = () => {
        let questions = this.state.questions[this.props.quizType],
            answers = this.state.answers,
            quizType = this.props.quizType;

        let score = 0;
        if (quizType === 'Chords') {
            for (let i = 0; i < questions.length; i++) {
                let expectedAnswer = questions[i].answer,
                    studentAnswer = this.state.answers[i];
                if (this.compareArrays(expectedAnswer, studentAnswer)) score++;
            };
        } else if (quizType === 'Note Names') {
            for (let i = 0; i < questions.length; i++) {
                if (questions[i] === answers[i]) score++;
            };
        } else if (quizType === 'Intervals') {
            for (let i = 0; i < questions.length; i++) {
                let expectedAnswer = questions[i].answer,
                    studentAnswer = this.state.answers[i];
                if (expectedAnswer === studentAnswer) score++;
            };
        };

        let percentage = Math.round(score / questions.length * 100),
            results = {
                percentage,
                right: score,
                totalQuestions: questions.length,
                grade: this.calculateGrade(percentage)
            };
        return results;
    }

    compareArrays = (x, y) => {
        if (x.length !== y.length) return false;
        for (let i = 0; i < x.length; i++) {
            if (!y.includes(x[i]) || !x.includes(y[i])) return false;
        };
        return true;
    };

    calculateGrade = score => {
        if (score >= 97 && score <= 100) return 'A+';
        else if (score >= 94) return 'A';
        else if (score >= 90) return 'A-';
        else if (score >= 87) return 'B+';
        else if (score >= 84) return 'B';
        else if (score >= 80) return 'B-';
        else if (score >= 77) return 'C+';
        else if (score >= 74) return 'C';
        else if (score >= 70) return 'C-';
        else if (score >= 67) return 'D+';
        else if (score >= 64) return 'D';
        else if (score >= 60) return 'D-';
        else if (score < 60) return 'F';
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
        let pendingAnswer;
        if (this.props.quizType === 'Chords') {
            pendingAnswer = this.state.pendingAnswer;
            if (pendingAnswer.length === 3) {
                pendingAnswer = [note];
            } else {
                pendingAnswer.push(note);
            }
        } else {
            pendingAnswer = note;
        }
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
                pendingAnswer: this.props.quizType === 'Chords' ? [] : null
            });
        }
    }

    deselect = note => {
        this.setState({ pendingAnswer: this.props.quizType === 'Chords' ? [note] : note });
    }

    begin = () => {
        this.setState({
            inProgress: true
        }, this.props.begin);
    }

    end = () => {
        this.setState({
            inProgress: false
        }, this.props.end);
    }

    returnToHome = () => {
        window.location.href = '/';
    }

    mostRecentlySelected = () => {
        if (this.props.quizType === 'Chords') {
            return this.state.pendingAnswer[this.state.pendingAnswer.length - 1];
        } else {
            return this.state.pendingAnswer;
        };
    };

    render() {
        const quizType = this.props.quizType, questions = this.state.questions[quizType];
        let index = this.state.index;

        const intros = {
            'Note Names': 'Welcome to the note names quiz! For each note you are given, please select its corresponding key on the keyboard. There will be 12 questions total. Good luck!',
            'Chords': 'Welcome to the chords quiz! For each note you are given, please spell out that note\'s MAJOR chord. There will be 12 questions total, and you will only be allowed to select 3 notes. Good luck!',
            'Intervals': 'Welcome to the intervals quiz! For each interval you are given, please select the note that is that interval ABOVE THE NOTE C. There will be 12 questions total. Good luck!'
        };

        // quiz is not in progress
        if (!this.state.inProgress) {
            // quiz hasn't begun
            if (this.state.index === 0) {
                return (       
                    <div className='quiz'>
                        <img alt="owl" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/loneowllogo.png" style={{ width: '125px', height: '125px' }}></img>
                        <h2 className='quizIntro'>{intros[quizType]}</h2>
                        <button className='quizButton' onClick={this.begin}>Begin Quiz</button>
                    </div>
                )
            // quiz is over
            } else {
                let results = this.calculateScore();
                let outros = {
                    'A': 'Great job!',
                    'B': 'Nice work!',
                    'C': 'Good job.',
                    'D': 'Good effort.',
                    'F': 'Good effort.'
                };
                return (
                    <div className='results'>
                        <img alt="owl" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/loneowllogo.png" style={{ width: '125px', height: '125px' }}></img>
                        <div>{outros[results.grade[0]]}</div><br/>
                        <p>You answered <b>{results.right}</b> out of <b>{results.totalQuestions}</b> questions correctly.</p><br/>
                        <p>Your score is <b>{results.percentage}%</b>.</p>
                        <p>Your grade is <b>{results.grade}</b>.</p>
                        <button style={{ margin: '20px' }} onClick={this.returnToHome} className='quizButton'>Return to Home</button>
                    </div>
                )
            }
        // quiz is in progress
        } else {
            const subMessages = {
                'Note Names': 'Select the following note on the keyboard:',
                'Chords': 'Spell out the following MAJOR chord on the keyboard:',
                'Intervals': 'Select the note on the keyboard that is the following interval above C:'
            };
            return (
                <div className='quiz'>
                    <img alt="owl" src="https://musictheoryprofessor.s3-us-west-1.amazonaws.com/loneowllogo.png" style={{ width: '125px', height: '125px' }}></img>
                    <p className="subMessage">{`${index + 1}.`} {subMessages[this.props.quizType]}</p>
                    <div className='question'>{quizType === 'Chords' || quizType === 'Intervals' ? questions[index].question : questions[index]}</div>
                    <Piano mostRecentlySelected={this.mostRecentlySelected} selectionLimit={this.state.noteLimit[this.props.quizType]} deselect={this.deselect} submitAnswer={this.submitAnswer} onClick={this.handleClick}/>
                </div>
            )
        }
    };
};

export default Quiz;