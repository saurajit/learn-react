import React, { useState } from "react";
import {connect} from 'react-redux';
import { createTodo } from '../../actions/todo.actions';
import './NewTodo.css';

const NewTodo = ({todos, createHandler}) => {
  const [todo, createNewTodo] = useState({
    title: '',
    description: '',
    completed: false
  });

  function updateTodo(event) {
    createNewTodo({
      ...todo, ...{
        [event.target.name]: event.target.value
      }
    })
  }

  function onCreateTodo(todo) {
    createHandler(todo);
    createNewTodo({
      title: '',
      description: '',
      completed: false
    });
  }

  return (
    <fieldset className="new-todo-form-wrapper">
      <legend>Add new todo</legend>
      <div className="new-todo-form">
        <div className="form-control-wrapper title">
          <label htmlFor="todo-title">Title</label>
          <input type="text" name="title" id="todo-title"
            value={todo.title}
            onChange={e => updateTodo(e)} />
        </div>
        <div className="form-control-wrapper description">
          <label htmlFor="todo-description">Description</label>
          <textarea name="description" id="todo-description" cols="30" rows="1"
            value={todo.description} onChange={e => updateTodo(e)}>
          </textarea>
        </div>
      </div>
      <div className="new-todo-action-wrapper">
        <button onClick={() => onCreateTodo(todo)} disabled={todo.title.length === 0}>New Todo</button>
      </div>
    </fieldset>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  createHandler: data => dispatch(createTodo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
