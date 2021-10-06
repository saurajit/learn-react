import todoService from './services/todos';
import {loadAllTodos, loadTodosFailure, loadTodosSuccess} from './actions/todo.actions';

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

export const displayAlert = (text) => () => {
  alert('Hello!!' + text);
}
