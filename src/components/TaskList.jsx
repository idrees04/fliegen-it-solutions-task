import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TaskList = ({
  tasks,
  toggleTaskCompletion,
  deleteTask,
  clearCompletedTasks,
}) => {
  return (
    <>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item
            key={task.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="me-2"
              />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.name}
              </span>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        variant="secondary"
        className="mt-3"
        onClick={clearCompletedTasks}
        disabled={tasks.every((task) => !task.completed)}
      >
        Clear Completed Tasks
      </Button>
    </>
  );
};

export default TaskList;
