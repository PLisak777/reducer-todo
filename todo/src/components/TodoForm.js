import React, { useState, useReducer } from 'react';
import {
	todos,
	todoReducer,
	ADD_TODO,
	TOGGLE_TODO,
	CLEAR_TODO,
} from '../reducers/todoReducer';

const TodoForm = () => {
	const [newTodo, setNewTodo] = useState('');
    const [state, dispatch] = useReducer(todoReducer, todos);
    
    console.log('pl: TodoForm.js: TodoForm: reducer output: ', state);

	const handleChange = (e) => {
        e.preventDefault();
        setNewTodo(e.target.value);
        dispatch({ type: ADD_TODO, payload: newTodo });
	};

		return (
			<form>
				<input
					type="text"
					name="todo"
					placeholder="Add Todo"
					value={newTodo}
					onChange={handleChange}
				/>
				<button onClick={handleChange}>Add Todo</button>
			</form>
		);
	}

export default TodoForm;
