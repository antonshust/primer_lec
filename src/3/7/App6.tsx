import AddTask from './AddTask6';
import TaskList from './TaskList6';
import { TasksProvider } from './TasksContext6';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
