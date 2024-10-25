import AddTask from './AddTask5';
import TaskList from './TaskList5';
import { TasksProvider } from './TasksContext5';
import './App1.css';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
