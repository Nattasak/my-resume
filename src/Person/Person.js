import React from 'react';
//import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            {props.name} {props.lastname}
        </div>
    )
};

export default person;
