import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = ({ onClick, onRemove, completed, text }) => (
  <li 
    className={
      `list-group-item list-group-item-${completed ? 'secondary': 'primary'} d-flex justify-content-between align-items-center`
    }
    onClick={onClick} 
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    {text}
    <FontAwesomeIcon 
      icon="trash" 
      onClick={onRemove}/>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
