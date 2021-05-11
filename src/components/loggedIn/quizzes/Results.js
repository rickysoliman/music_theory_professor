import React, { useEffect } from 'react';
import IndividualQuestionResults from './IndividualQuestionResults';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Results = props => {
    const { isAuthenticated } = useAuth0();

    const compareArrays = (x, y) => {
        console.log({x, y});
        if (x.length !== y.length) return false;
        for (let i = 0; i < x.length; i++) {
            if (!y.includes(x[i]) || !x.includes(y[i])) return false;
        };
        return true;
    };

    let results = JSON.parse(props.results);
    let { questions, answers, quizType } = results, correct;
    let comparisons = questions.map((question, i) => {
            let answer = answers[i];
            if (quizType === 'Chords') {
                correct = compareArrays(question.answer, answers[i]);
                return <IndividualQuestionResults key={i} number={i + 1} question={question.question} correct={correct} quizType={props.quizType}/>
            } else if (quizType === 'Note Names') {
                correct = question === answer;
                return <IndividualQuestionResults key={i} number={i + 1} question={question} correct={correct} quizType={props.quizType} />
            } else if (quizType === 'Intervals') {
                correct = question.answer === answer;
                return <IndividualQuestionResults key={i} number={i + 1} question={question.question} correct={correct} quizType={props.quizType} />
            } else return null;
        });

    useEffect(() => {
        if (!isAuthenticated) return null;
    });

    return (
        props.display ? (

            <div>{comparisons}</div>

        ) : null
    );
};

export default Results;