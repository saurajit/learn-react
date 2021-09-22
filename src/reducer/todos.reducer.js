import { ADD_TODO, REMOVE_TODO, CHANGE_STATUS } from "../actions/todo.actions";

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
    default:
      return state;
  }
}
