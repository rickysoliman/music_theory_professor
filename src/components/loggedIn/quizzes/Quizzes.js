import React from 'react';

const Quizzes = () => {
    const areYouSure = () => {
        const response = window.confirm('Are you sure you want to exit this quiz?');
        if (response) window.location.href = '/';
    };

    return (
        <>
           <div>Quizzes</div>
           <button onClick={areYouSure}>X</button>
        </>
    )
};

export default Quizzes;