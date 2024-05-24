import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group controlId="taskName">
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskInput;
