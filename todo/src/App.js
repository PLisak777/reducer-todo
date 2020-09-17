import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { todos } from './reducers/todoReducer'

import './App.css';

const App = () => {

	return (
		<div className="App">
			<div className="header">
				<h2>Input Todos Here</h2>
			</div>
      <TodoForm />
      <TodoList />
		</div>
	);
};

export default App;
