import React from 'react';

function IziComponent(props) {
    const fullName = () => props.firstName + ' ' + props.lastName;

    return (
        <div>
            <p>Hello, {fullName()}!</p>
        </div>
    );
}

export default IziComponent;
