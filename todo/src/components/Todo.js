import React from 'react';
import { TOGGLE_TODO, CLEAR_TODO } from '../reducers/todoReducer';

const Todo = (props) => {
	return (
		<div
			onClick={() => {
                dispatch({ type: TOGGLE_TODO });
                dispatch({ type: CLEAR_TODO });
            }}
			className={`todo${props.newTodo.completed ? ' completed' : ''}`}
		>
			<p>{props.newTodo.item}</p>
		</div>
	);
};

export default Todo;
