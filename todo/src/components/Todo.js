import React from 'react';

const Todo = (props) => {
	return (
		<div
			onClick={() => props.toggleTodo(props.newTodo.id)}
			className={`todo${props.newTodo.completed ? ' completed' : ''}`}
		>
			<p>{props.newTodo.item}</p>
		</div>
	);
};

export default Todo;
