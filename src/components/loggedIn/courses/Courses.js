import React from 'react';

const Courses = () => {
    const areYouSure = () => {
        const response = window.confirm('Are you sure you want to exit this course?');
        if (response) window.location.href = '/';
    };

    return (
        <>
            <div>Courses</div>
            <button onClick={areYouSure}>X</button>
        </>
    )
};

export default Courses;