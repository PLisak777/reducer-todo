import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
	todoReducer,
	ADD_TODO,
	CLEAR_TODO,
	todos,
	TOGGLE_TODO,
} from './reducers/todoReducer';

import './App.css';

const App = () => {
	const [state, dispatch] = useReducer(todoReducer, todos);

	return (
		<div className="App">
			<div className="header">
				<h2>Input Todos Here</h2>
			</div>
			<TodoForm
				ADD_TODO={ADD_TODO} // PROP DRILLING: Add whatever is going to be called in other components to parent
				dispatch={dispatch}
			/>
			<TodoList
				items={todos}
				state={state}
				dispatch={dispatch}
				TOGGLE_TODO={TOGGLE_TODO}
				CLEAR_TODO={CLEAR_TODO}
			/>
		</div>
	);
};

export default App;
