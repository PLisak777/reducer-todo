import React, { useState } from 'react';
import { ADD_TODO } from '../reducers/todoReducer';

const TodoForm = (props) => {
	const [newTodo, setNewTodo] = useState('');

	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        props.dispatch({ type: ADD_TODO, payload: newTodo });
        setNewTodo('')
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
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default TodoForm;
