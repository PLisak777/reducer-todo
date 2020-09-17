import React, { useState } from 'react';

const TodoForm = (props) => {
    const [todo, setTodo] = useState({
        todo: ''
    })

	const handleChange = (e) => {
		setTodo({
            todo: e.target.value
        });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTodo(todo);
		setTodo({
			todo: '',
		});
	};

		return (
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="todo"
					placeholder="Add Todo"
					value={props.todos}
					onChange={handleChange}
				/>
				<button onClick={props.addTodo}>Add Todo</button>
			</form>
		);
	}

export default TodoForm;
