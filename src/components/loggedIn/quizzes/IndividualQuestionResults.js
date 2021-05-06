import React from 'react';

const IndividualQuestionResults = props => {
    const { number, question, correct } = props;
    return (
        <div style={{ margin: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', textDecoration: 'bold', color: `${correct ? 'green' : 'red'}` }}>{number}. {question} {correct ? '√' : '✕'}</h3>
        </div>
    );
};

export default IndividualQuestionResults;