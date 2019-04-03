import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ListGroup style={{ marginTop: 10, marginBottom: 10 }}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)} 
        onRemove={() => removeTodo(todo.id)}
      />
    )}
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func,
  removeTodo: PropTypes.func
}

export default TodoList
