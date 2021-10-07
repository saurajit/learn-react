import React, { useEffect } from "react";
import { connect } from 'react-redux';
import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodo from '../NewTodo/NewTodo';
import { loadTodos, removeTodo, changeStatus } from '../../thunk';

const TodoList = ({todos = [], removeTodo, changeStatus, isLoading, startLoadingTodos}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const confirmRemoval = (todo) => {
    if (confirm(`Do you want to remove "${todo.title}"?`)) {
      removeTodo(todo.id);
    }
  }
  const loadingMessage = (<div>Loading todos....</div>)
  const content = (
    <div>
      <h2>Todo List</h2>
      <NewTodo />
      {
        todos.length > 0 ?
          (
            <div className="todo-list">
              {todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} onRemove={confirmRemoval}
                onStatusChange={changeStatus}/>
              ))}
            </div>) :
          (
            <div>No todos created</div>
          )
      }
    </div>
  );

  return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  changeStatus: (todo, status) => dispatch(changeStatus(todo, status)),
  startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
