import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';

const TaskListPage = ({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
  onClearCompletedTasks,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="my-4">Task List</h1>
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => navigate('/add')}
      >
        Add New Task
      </Button>
      <TaskList
        tasks={tasks}
        onToggleTaskCompletion={onToggleTaskCompletion}
        onDeleteTask={onDeleteTask}
        onClearCompletedTasks={onClearCompletedTasks}
      />
    </Container>
  );
};

export default TaskListPage;
