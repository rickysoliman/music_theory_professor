import React, { useState } from 'react';

const EditAccountInfo = props => {
    let [ firstName, setFirstName ] = useState('');
    let [ lastName, setLastName ] = useState('');

    const handleChange = e => {
        let id = e.target.id, value = document.getElementById(id).value;
        if (id === 'firstName') {
            setFirstName(value);
        } else {
            setLastName(value);
        }
    };

    const handleSave = () => {
        props.changeFirstName(firstName);
        props.changeLastName(lastName);
        props.save();
    };

    return (
        <form>
            <input id='firstName' placeholder='first name' onChange={handleChange}></input>
            <input id='lastName' placeholder='last name' onChange={handleChange}></input>
            <button onClick={handleSave}>Save</button>
        </form>
    );
};

export default EditAccountInfo;