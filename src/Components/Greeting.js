import React from 'react';

function Greeting() {
    const time = new Date().toLocaleDateString();
    return (
        <div>
            <h1 style={{color: 'purple', backgroundColor: 'lightgreen'}}>
                Hello, Welcome to React!
                The current date is: {time}
            </h1>
        </div>
    );
}


export default Greeting;