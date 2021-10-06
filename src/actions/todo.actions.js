export const ADD_TODO = 'ADD_TODO';
export const createTodo = data => ({
  type: ADD_TODO,
  payload: data
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = index => ({
  type: REMOVE_TODO,
  payload: index
});

export const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = (status, index) => ({
  type: CHANGE_STATUS,
  payload: {status, index}
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadAllTodos = () => ({
  type: LOAD_TODOS_IN_PROGRESS
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: {todos}
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = error => ({
  type: LOAD_TODOS_FAILURE,
  payload: {error}
});
