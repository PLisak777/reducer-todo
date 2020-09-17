import React from 'react';
import TodoForm from './components/TodoForm'

import './App.css';

const App = () => {

	return (
		<div className="App">
			<div className="header">
				<h2>Input Todos Here</h2>
			</div>
      <TodoForm />
		</div>
	);
};

export default App;
