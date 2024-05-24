import { ListGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TaskList = ({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
  onClearCompletedTasks,
}) => (
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
              onChange={() => onToggleTaskCompletion(task.id)}
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
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
    <Button
      variant="secondary"
      className="mt-3"
      onClick={onClearCompletedTasks}
      disabled={tasks.every((task) => !task.completed)}
    >
      Clear Completed Tasks
    </Button>
  </>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleTaskCompletion: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onClearCompletedTasks: PropTypes.func.isRequired,
};

export default TaskList;
