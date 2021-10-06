import { ADD_TODO, REMOVE_TODO, CHANGE_STATUS,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_FAILURE, LOAD_TODOS_SUCCESS } from "../actions/todo.actions";

export const isLoading = (state = false, {type}) => {
  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
}

export const todos = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_TODO:
      state = [...[payload], ...state];
      return state;
    case REMOVE_TODO:
      state.splice(payload, 1);
      return [...[], ...state];
    case CHANGE_STATUS:
      state[payload.index].completed = payload.status;
      return [...[], ...state];
    case LOAD_TODOS_SUCCESS:
      return payload.todos;
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
}
