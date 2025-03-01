import { useState } from 'react';
import React from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>Clicking the button increases the count</p>
      </div>
    );
  }

export default Counter;