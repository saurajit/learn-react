export const ADD_TODO = 'ADD_TODO';
export const createTodo = data => ({
  type: ADD_TODO,
  payload: data
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

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const addTodoSuccess = payload => ({
  type: ADD_TODO_SUCCESS,
  payload
});

export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
export const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {error}
});

export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const updateTodoSuccess = payload => ({
  type: UPDATE_TODO_SUCCESS,
  payload
});

export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';
export const updateTodoFailure = error => ({
  type: UPDATE_TODO_FAILURE,
  payload: {error}
});

export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const removeTodoSuccess = payload => ({
  type: REMOVE_TODO_SUCCESS,
  payload
});

export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE';
export const removeTodoFailure = error => ({
  type: REMOVE_TODO_FAILURE,
  payload: {error}
});
