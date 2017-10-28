import React from 'react';
//import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p>{props.name} {props.lastname}</p>
        </div>
    )
};

export default person;
