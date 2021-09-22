export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const createTodo = data => ({
  type: ADD_TODO,
  payload: data
});

export const removeTodo = index => ({
  type: REMOVE_TODO,
  payload: index
});

export const changeStatus = (status, index) => ({
  type: CHANGE_STATUS,
  payload: {status, index}
});
