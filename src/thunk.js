import todoService from './services/todos';
import {loadAllTodos, loadTodosFailure, loadTodosSuccess,
addTodoFailure, addTodoSuccess,
removeTodoFailure, removeTodoSuccess,
updateTodoFailure, updateTodoSuccess} from './actions/todo.actions';

export const loadTodos = () => async(dispatch) => {
  try {
    dispatch(loadAllTodos());
    const todos = await todoService.getAll();
    dispatch(loadTodosSuccess(todos));
  } catch(error) {
    dispatch(loadTodosFailure(error));
  }
}

export const addTodo = (todo) => async(dispatch) => {
  try {
    const addedTodo = await todoService.addTodo(todo);
    dispatch(loadTodos());
    dispatch(addTodoSuccess(addedTodo));
  } catch(error) {
    dispatch(addTodoFailure(error));
  }
}

export const removeTodo = (id) => async(dispatch) => {
  try {
    const todo = await todoService.removeTodo(id);
    dispatch(loadTodos());
    dispatch(removeTodoSuccess(todo));
  } catch(error) {
    dispatch(removeTodoFailure(error));
  }
}

export const changeStatus = (todo, status) => async(dispatch) => {
  try {
    todo.status = status;
    const updatedTodo = await todoService.changeStatus(todo.id, todo)
    dispatch(loadTodos());
    dispatch(updateTodoSuccess(updatedTodo));
  } catch(error) {
    dispatch(updateTodoFailure(error));
  }
}

export const displayAlert = (text) => () => {
  alert('Hello!!' + text);
}
