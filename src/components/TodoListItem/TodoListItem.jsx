import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, onStatusChange, onRemove }) => (
  <div className={`todo-item-wrapper ${todo.status ? 'completed' : ''}`}>
    <div className="todo-item-details" >
      <h4>{todo.title || '<no title>'}</h4>
      <div>{todo.description || '<no description>'}</div>
    </div>
    {
        <div className="todo-item-actions">
          <button onClick={() => onStatusChange(todo, !todo.status)}>Mark as {
          todo.status ? 'in-complete': 'complete'}</button>
          <button onClick={() => onRemove(todo)}>Remove</button>
        </div>
    }
  </div>
);

export default TodoListItem;
