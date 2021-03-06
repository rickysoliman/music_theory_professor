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
        if (firstName !== '' && lastName !== '') {
            props.changeFirstName(firstName);
            props.changeLastName(lastName);
            props.save();
        } else if (firstName !== '' && lastName === '') {
            props.changeFirstName(firstName);
            props.save();
        } else if (firstName === '' && lastName !== '') {
            props.changeLastName(lastName);
            props.save();
        } else {
            window.alert('Please fill out the form.');
            return;
        }
    };

    return (
        <form id='editProfileInfoForm'>
            <input className='editProfileInput' id='firstName' placeholder='first name' onChange={handleChange}></input>
            <input className='editProfileInput' id='lastName' placeholder='last name' onChange={handleChange}></input>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button id='saveProfileInfoForm' onClick={handleSave}>Save</button>
                <button id='saveProfileInfoForm' onClick={props.close}>Cancel</button>
            </div>
        </form>
    );
};

export default EditAccountInfo;