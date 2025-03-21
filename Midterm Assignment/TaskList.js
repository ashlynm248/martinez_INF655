//Consists of TaskList, TaskForm, and DeleteTask components
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";

// Task List
const initialTasks = [
    { title: "Do Homework", description: "Complete coding homework" },
    { title: "Clean the Car", description: "Wash and vacuum the car floors" },
    { title: "Feed the Fish", description: "Feed the fish with pellet food" },
    { title: "Plant Flowers", description: "Plant roses in the front" },
    { title: "Bake Cookies", description: "Bake chocolate chip cookies" }
];

// Allows searching for tasks 
function SearchTask({ setSearch }) {
    return (
        <input
            type="text"
            placeholder="Search tasks..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
    );
}

// Allows a new task to be added 
function TaskForm({ addTask }) {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required")
        }),
        onSubmit: (values, { resetForm }) => {
            addTask(values); 
            resetForm(); 
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="title">Task Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="description">Task Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                    <div>{formik.errors.description}</div>
                ) : null}
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
}

// List components
export default function TaskList() {
    const [tasks, setTasks] = useState(initialTasks);
    const [search, setSearch] = useState("");

    // Adding a new task
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    // Deleting a task
    const deleteTask = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            setTasks(tasks.filter((_, i) => i !== index));
        }
    };

    // Sorting alphabetically 
    const sortTasksByName = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
        setTasks(sortedTasks);
    };

    // Filtering tasks based on search 
    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search)
    );

    return (
        <div>
            <Card>
                <h2>Task List</h2>
                <SearchTask setSearch={setSearch} />
                <button onClick={sortTasksByName}>Sort by Name</button>
                <ul>
                    {filteredTasks.map((task, index) => (
                        <li key={index}>
                            <strong>{task.title}</strong>: {task.description}
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <TaskForm addTask={addTask} />
            </Card>
        </div>
    );
}

