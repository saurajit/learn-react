import React from "react";
import { connect } from 'react-redux';
import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodo from '../NewTodo/NewTodo';
import { removeTodo, changeStatus } from '../../actions/todo.actions';

const TodoList = ({todos = [], removeTodo, changeStatus}) => {

  return (
    <div>
      <h2>Todo List</h2>
      <NewTodo />
      {
        todos.length > 0 ?
          (
            <div className="todo-list">
              {todos.map((todo, i) => (
                <div key={i.toString()}>
                  <TodoListItem todo={todo} index={i} onRemove={removeTodo}
                  onStatusChange={changeStatus}/>
                </div>
              ))}
            </div>) :
          (
            <div>No todos created</div>
          )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  removeTodo: index => dispatch(removeTodo(index)),
  changeStatus: (status, index) => dispatch(changeStatus(status, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
