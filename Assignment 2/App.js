import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import UserInfo from './UserInfo';
import TaskForm from './TaskForm';



//holds the names of usernames-used below
function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}



//the array of tasks
const tasks = [
  { id: 1, tasks: "Do Homework"},
  { id: 2, tasks: "Clean the Car"},
  { id: 3, tasks: "Feed the Fish"},
  { id: 4, tasks: "Plant Flowers"},
  { id: 5, tasks: "Bake Cookies"}
];

//function to display the tasks
function TaskList() {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.tasks}</li>
        ))}
      </ul>
    </div>
  );
}



function App() {
  return (
    <div>
      <Greeting/>
      <Welcome name="Charlie!"/>
      <Welcome name="Violet!"/>
      <Counter />
      <TaskList />
      <UserInfo />
      <TaskForm />
    </div>
  );
}



export default App;
