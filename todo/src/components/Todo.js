import React from 'react';
import { TOGGLE_TODO } from '../reducers/todoReducer';

const Todo = (props) => {
	return (
		<div
			onClick={() => {
				props.dispatch({ type: TOGGLE_TODO, payload: props.newTodo.id });
			}} // why did we add a payload here?
		>
			<p
				style={
					props.newTodo.completed ? { textDecoration: 'line-through' } : null
				}
			>
				{props.newTodo.item}
			</p>
		</div>
	);
};

export default Todo;
