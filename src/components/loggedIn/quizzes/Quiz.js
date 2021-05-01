import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <>
                {/* <button onClick={this.areYouSure}>X</button> */}
                <div>{this.props.quizType}</div>
            </>
        )
    };
};

export default Quiz;