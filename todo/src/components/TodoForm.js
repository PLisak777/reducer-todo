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
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        setNewTodo(newTodo);
	};

		return (
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="todo"
					placeholder="Add Todo"
					value={newTodo}
					onChange={handleChange}
				/>
				<button onClick={() => {
                    dispatch({ type: ADD_TODO, payload: newTodo })
                }}>Add Todo</button>
			</form>
		);
	}

export default TodoForm;
