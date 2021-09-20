import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, index, onStatusChange, onRemove }) => (
  <div className={`todo-item-wrapper ${todo.completed ? 'completed' : ''}`}>
    <div className="todo-item-details" >
      <h4>{todo.title || '<no title>'}</h4>
      <div>{todo.description || '<no description>'}</div>
    </div>
    {
      todo.completed ? '' :
        <div className="todo-item-actions">
          <button onClick={() => onStatusChange(true, index)}>Mark as complete</button>
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
    }
  </div>
);

export default TodoListItem;
