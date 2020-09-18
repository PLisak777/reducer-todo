import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { ADD_TODO, CLEAR_TODO, todos, TOGGLE_TODO } from './reducers/todoReducer'

import './App.css';

const App = () => {

	return (
		<div className="App">
			<div className="header">
				<h2>Input Todos Here</h2>
			</div>
      <TodoForm 
      ADD_TODO={ADD_TODO}
      />
      <TodoList 
      todos={todos}
      TOGGLE_TODO={TOGGLE_TODO}
      CLEAR_TODO={CLEAR_TODO}
      />
		</div>
	);
};

export default App;
