import { Container } from 'react-bootstrap';
import TaskInput from '../components/TaskInput';
import PropTypes from 'prop-types';

const AddTaskPage = ({ onAddTask }) => (
  <Container>
    <h1 className="my-4">Add Task</h1>
    <TaskInput onAddTask={onAddTask} />
  </Container>
);

AddTaskPage.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTaskPage;
