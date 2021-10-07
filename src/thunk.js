import todoService from './services/todos';
import {loadAllTodos, loadTodosFailure, loadTodosSuccess,
addTodoFailure, addTodoSuccess,
removeTodoFailure, removeTodoSuccess,
updateTodoFailure, updateTodoSuccess} from './actions/todo.actions';

export const loadTodos = () => async(dispatch) => {
  try {
    dispatch(loadAllTodos());
    const response = await todoService.getAll();
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch(error) {
    dispatch(loadTodosFailure(error));
  }
}

export const addTodo = (todo) => async(dispatch) => {
  try {
    const response = await todoService.addTodo(todo);
    const addedTodo = await response.json();
    dispatch(loadTodos());
    dispatch(addTodoSuccess(addedTodo));
  } catch(error) {
    dispatch(addTodoFailure(error));
  }
}

export const removeTodo = (id) => async(dispatch) => {
  try {
    const response = await todoService.removeTodo(id);
    const todo = await response.json();
    dispatch(loadTodos());
    dispatch(removeTodoSuccess(todo));
  } catch(error) {
    dispatch(removeTodoFailure(error));
  }
}

export const changeStatus = (todo, status) => async(dispatch) => {
  try {
    todo.status = status;
    const response = await todoService.changeStatus(todo.id, todo)
    const updatedTodo = await response.json();
    console.log(updatedTodo);
    dispatch(loadTodos());
    dispatch(updateTodoSuccess(updatedTodo));
  } catch(error) {
    dispatch(updateTodoFailure(error));
  }
}

export const displayAlert = (text) => () => {
  alert('Hello!!' + text);
}
