import { createStore, combineReducers} from 'redux';
import { todos } from './reducer/todos.reducer';

const reducers = {
  todos
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
