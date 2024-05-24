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

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <Container>
      <h1 className="my-4">Task Tracker</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        clearCompletedTasks={clearCompletedTasks}
      />
    </Container>
  );
}

export default App;
