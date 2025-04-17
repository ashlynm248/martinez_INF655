import React, { useState } from 'react';

//The original greeting message
function Greeting(props) {
    const [greeting, setGreeting] = useState(`Welcome to React, ${props.name}!`); 
    const date = new Date().toLocaleDateString();

//The changing greeting message
    const changeGreeting = () => {
        setGreeting(`Hello, ${props.name}! Have a great day!`); 
    };

//The button that changes the greeting message
    return (
      <div>
        <h2>{greeting}</h2>
        <p>Today's date is {date}</p>
        <button onClick={changeGreeting}>Change Greeting</button> {}
      </div>
    );
}



export default Greeting;