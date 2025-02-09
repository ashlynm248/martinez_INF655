import './App.css';
import TaskComponent from "./Components/TaskComponent";
import Greeting from './Components/Greeting';
import UserInfos from "./Components/UserInfos";

function App() {
  return (
    <div className="App">
        <Greeting/>
        <TaskComponent/>
        <UserInfos/>
    </div>
  );
}


export default App;
