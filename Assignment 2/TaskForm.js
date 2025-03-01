import React from 'react';

import { useState } from 'react';

function TaskForm() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Task Name"
                value={task}
                onChange={handleChange}
            />
            <button type="submit">Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </form>
    );
}


export default TaskForm; 