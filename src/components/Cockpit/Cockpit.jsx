import React from 'react';
import Aux from '../hoc/Aux'

const Cockpit = (props) => {
    return (
            <Aux>
            <h1>{props.appTitle}</h1>
            <button onClick={props.clicked}>Button</button>
            </Aux>
    );
}

export default Cockpit;
