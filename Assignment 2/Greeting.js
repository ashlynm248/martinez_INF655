import React from 'react';

function Greeting() {
    const date = new Date().toLocaleDateString();
    return (
      <div>
        <h1>Welcome to React!</h1>
        <h3>Today's date is {date}</h3>
      </div>
    )
  }



export default Greeting;