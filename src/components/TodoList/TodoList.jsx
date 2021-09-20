import React, { useState } from "react";
import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodo from '../NewTodo/NewTodo';

const TodoList = () => {

  const [todos, setTodos] = useState([])

  function onTodoCreate(newTodo) {
    setTodos([...[newTodo], ...todos])
  }

  function onStatusChange(status, i) {
    todos[i].completed = status;
    setTodos([...todos]);
  }

  function onRemove(i) {
    todos.splice(i, 1);
    setTodos([...todos]);
  }
  return (
    <div>
      <h2>Todo List</h2>
      <NewTodo createHandler={onTodoCreate} />
      {
        todos.length > 0 ?
          (
            <div className="todo-list">
              {todos.map((todo, i) => (
                <div key={i.toString()}>
                  <TodoListItem todo={todo} index={i} onRemove={onRemove}
                  onStatusChange={onStatusChange}/>
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

export default TodoList;
