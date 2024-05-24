import { useState } from 'react';
import { Container } from 'react-bootstrap';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([newTask, ...tasks]);
  };

  return (
    <Container>
      <h1 className="my-4">Task Tracker</h1>
      <TaskInput addTask={addTask} />
    </Container>
  );
}

export default App;
