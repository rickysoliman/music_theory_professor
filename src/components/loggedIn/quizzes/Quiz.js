import React, { Component } from 'react';
// import styled from 'styled-components';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.areYouSure = this.areYouSure.bind(this);
    }

    areYouSure = () => {
        const response = window.confirm('Are you sure you want to exit this quiz?');
        if (response) window.location.href = '/';
    };

    render() {
        return (
            <>
                <button onClick={this.areYouSure}>X</button>
                <div>{this.props.quizType}</div>
            </>
        )
    };
};

export default Quiz;