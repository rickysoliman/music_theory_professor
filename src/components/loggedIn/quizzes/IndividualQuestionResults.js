import React from 'react';

const IndividualQuestionResults = props => {
    const { number, question, studentAnswer, correctAnswer, correct, quizType } = props;
    // return quizType === 'Chords' || quizType === 'Intervals' ? (
    //     <div style={{ margin: '20px' }}>
    //         <h3 style={{ fontSize: '1.5rem', textDecoration: 'bold', color: `${correct ? 'green' : 'red'}` }}>{number}. {question} {correct ? '√' : '✕'}</h3>
    //         <div>Your answer: {quizType === 'Chords' ? <span style={{ fontSize: '1.5rem' }}>{studentAnswer[0]}, {studentAnswer[1]}, {studentAnswer[2]}</span> : <span style={{ textDecoration: 'bold', fontSize: '1.5rem' }}>{studentAnswer}</span>}</div>
    //         <div>Correct answer: {quizType === 'Chords' ? <span style={{ fontSize: '1.5rem' }}>{correctAnswer[0]}, {correctAnswer[1]}, {correctAnswer[2]}</span> : <span style={{ textDecoration: 'bold', fontSize: '1.5rem' }}>{correctAnswer}</span>}</div>
    //     </div>
    // ) : (
    //         <div style={{ margin: '20px' }}>
    //             <h3 style={{ fontSize: '1.5rem', textDecoration: 'bold', color: `${correct ? 'green' : 'red'}` }}>{number}. {question} {correct ? '√' : '✕'}</h3>
    //             <div>{correct ? '' : <div>Your answer: {quizType === 'Chords' ? <span style={{ fontSize: '1.5rem' }}>{studentAnswer[0]}, {studentAnswer[1]}, {studentAnswer[2]}</span> : <span style={{ textDecoration: 'bold', fontSize: '1.5rem' }}>{studentAnswer}</span>}</div>}</div>
    //         </div>
    // );
    return (
        <div style={{ margin: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', textDecoration: 'bold', color: `${correct ? 'green' : 'red'}` }}>{number}. {question} {correct ? '√' : '✕'}</h3>
            <div>{correct ? '' : <div>Your answer: {quizType === 'Chords' ? <span style={{ textDecoration: 'bold', fontSize: '1.5rem' }}>{studentAnswer[0]}, {studentAnswer[1]}, {studentAnswer[2]}</span> : <span style={{ textDecoration: 'bold', fontSize: '1.5rem' }}>{studentAnswer}</span>}</div>}</div>
        </div>
    );
};

export default IndividualQuestionResults;