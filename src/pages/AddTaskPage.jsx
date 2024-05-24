import React from 'react';
import { Container } from 'react-bootstrap';
import TaskInput from '../components/TaskInput';

const AddTaskPage = ({ onAddTask }) => (
  <Container>
    <h1 className="my-4">Add Task</h1>
    <TaskInput onAddTask={onAddTask} />
  </Container>
);

export default AddTaskPage;
