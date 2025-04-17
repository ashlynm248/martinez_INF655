import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card } from "react-bootstrap";
import { db } from "./firebase";
import { collection, addDoc, getDocs, query, orderBy, where } from "firebase/firestore";
import { UserAuth } from "./UserAuth"; 


//different task list functions
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = UserAuth();


//This is the function that collects the userId and createdAt
  const fetchTasks = async () => {
    if (user?.uid) {
      const q = query(
        collection(db, "tasks"), 
        where("userId", "==", user.uid), 
        orderBy("createdAt") 
      );
      const querySnapshot = await getDocs(q);
      const tasksList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTasks(tasksList);
    }
  };


  useEffect(() => {
    fetchTasks(); 
  }, );

 
//shows ID, task name, description, and when task was created
  const addTask = async (task) => {
    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        userId: user.uid, 
        taskName: task.title, 
        taskDescription: task.description, 
        createdAt: new Date(), 
      });
      console.log("Task added with ID: ", docRef.id);
      fetchTasks(); 
    } catch (e) {
      console.error("Error adding task: ", e);
    }
  };

  // Form validation
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Task title is required"),
      description: Yup.string().required("Task description is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      addTask(values);
      resetForm();
    },
  });

  // Search tasks
  const filteredTasks = tasks.filter(
    (task) =>
      task.taskName.toLowerCase().includes(search.toLowerCase()) ||
      task.taskDescription.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Card>
    <div>
      </div>
        <h2>Task List</h2>
        <input
          type="text"
          placeholder="Search tasks..." //allows the user to search for tasks
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="title">Task Title</label>
            <input
              id="title" //creating a title for the task
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
              id="description" //creating a description for the task
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
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <strong>{task.taskName}</strong>: {task.taskDescription}
              <p>Created at: {task.createdAt.toDate().toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default TaskList;