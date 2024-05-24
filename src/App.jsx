import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddTaskPage from './pages/AddTaskPage';
import TaskListPage from './pages/TaskListPage';

const App = () => {
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
    <Routes>
      <Route path="/add" element={<AddTaskPage onAddTask={addTask} />} />
      <Route
        path="/tasks"
        element={
          <TaskListPage
            tasks={tasks}
            onToggleTaskCompletion={toggleTaskCompletion}
            onDeleteTask={deleteTask}
            onClearCompletedTasks={clearCompletedTasks}
          />
        }
      />
      <Route path="*" element={<Navigate to="/tasks" />} />
    </Routes>
  );
};

export default App;
