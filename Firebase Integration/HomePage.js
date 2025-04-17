import Tasks from "./Tasks";
import AddTask from "./AddTask";

export default function HomePage() {
  return (
    <div className="container">
      <AddTask />
      <Tasks />
    </div>
  );
}