import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import Quiz from './quizzes/Quiz';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 0;
`;

const ModalWrapper = styled.div`
    width: 90vw;
    height: 90vh;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20p;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10px;
`;

const Modal = props => {
    let showModal = props.quizType !== null;

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const areYouSure = () => {
        const response = window.confirm('Are you sure you want to exit this quiz?');
        if (response) window.location.href = '/';
    };

    return props.quizType ? (

        <Background>
            <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        <Quiz quizType={props.quizType}/>
                    </ModalContent>
                    <CloseModalButton aria-label="Close modal" onClick={areYouSure}>X</CloseModalButton>
                </ModalWrapper>
            </animated.div>
        </Background>

    ) : null;
};

export default Modal;