import React from 'react';
import styled from 'styled-components';
import Quiz from './quizzes/Quiz';

const Modal = props => {
    return props.quizType ? (
        <>
            <Quiz quizType={props.quizType}/>
        </>
    ) : null;
};

export default Modal;