import React from 'react';

const NavigationButton = props => {
    return (
        <button onClick={props.handleSelection} className="navigationButton" id={props.type}>{props.type}</button>
    )
};

export default NavigationButton;