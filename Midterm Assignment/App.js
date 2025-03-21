import './App.css';
import Greeting from './Greeting';
import UserInfo from './UserInfo';
import TaskList from './TaskList';




function App() {
  return (
    <div>
      <Greeting/>
      <br></br>
      <h2>Tasks</h2>
      <TaskList />
      <br></br>
      <UserInfo />
    </div>
  );
}



export default App;