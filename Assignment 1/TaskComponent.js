import React from 'react';

function TaskComponent () {
    const name = 'task';
    const tasks = [
      {
        id: 1,
        title: 'Clean out the garage',
        description: 'Clean up the mess in the garage and organize it'
      },
      {
        id: 2,
        title: 'Plant flowers in the garden',
        description: 'Plant flowers in the garden and water them'
      },
      {
        id: 3,
        title: 'Hang up Chiefs flag',
        description: 'Hang up the Chiefs flag outside on the flag pole'
      }
    ];
  
    const taskManager = () => {
      const int = Math.floor(Math.random() * 3);
      return tasks[int].title;
    };
  
    return (
      <div className="App">
          <p style={{color: 'lightgreen', backgroundColor: 'purple'}}>
          Complete the following {name}: <h3>{taskManager()}</h3>
        </p>
      </div>
    );
  }
  
  
  export default TaskComponent;