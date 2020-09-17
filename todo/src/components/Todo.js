import React, { useReducer } from 'react';
import { todoReducer, todos, TOGGLE_TODO, CLEAR_TODO } from '../reducers/todoReducer';

const Todo = (props) => {
    const [state, dispatch] = useReducer(todoReducer, todos);

	return (
		<div
			onClick={() => {
                dispatch({ type: TOGGLE_TODO });
                dispatch({ type: CLEAR_TODO });
            }}
			className={`todo${todos.completed ? ' completed' : ''}`}
		>
			<p>{todos.item}</p>
		</div>
	);
};

export default Todo;
