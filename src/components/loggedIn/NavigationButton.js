import React from 'react';

const NavigationButton = props => {
    return (
        <button onClick={props.onClick} className="navigationButton" id={props.type}>{props.type}</button>
    )
};

export default NavigationButton;