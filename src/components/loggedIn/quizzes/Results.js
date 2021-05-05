import React from 'react';
import IndividualQuestionResults from './IndividualQuestionResults';

const Results = props => {
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
        console.log(results);
        let comparisons = questions.map((question, i) => {
            let answer = answers[i];
            if (quizType === 'Chords') {
                correct = compareArrays(question.answer, answers[i]);
                return <IndividualQuestionResults key={i} number={i + 1} question={question.question} studentAnswer={answer} correctAnswer={question.answer} correct={correct} quizType={props.quizType}/>
            } else if (quizType === 'Note Names') {
                correct = question === answer;
                return <IndividualQuestionResults key={i} number={i + 1} question={question} studentAnswer={answer} correctAnswer={question} correct={correct} quizType={props.quizType} />
            } else if (quizType === 'Intervals') {
                correct = question.answer === answer;
                return <IndividualQuestionResults key={i} number={i + 1} question={question.question} studentAnswer={answer} correctAnswer={question.answer} correct={correct} quizType={props.quizType} />
            };
        });
    return (
        props.display ? (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>{comparisons}</div>

        ) : null
    );
};

export default Results;