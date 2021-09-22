import React from 'react';
import {Provider} from 'react-redux';
import './App.css'
import TodoList from '../TodoList/TodoList';
import { configureStore } from '../../store';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <div className="app-wrapper function">
        <TodoList />
      </div>
    </Provider>
  )
}
