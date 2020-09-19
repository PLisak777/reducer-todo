import React from 'react';
import { CLEAR_TODO } from '../reducers/todoReducer';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div>
			{props.state.map((newTodo) => (
				<Todo key={newTodo.id} newTodo={newTodo} dispatch={props.dispatch} />
			))}
			<button
				className="clear"
				onClick={() => {
					props.dispatch({ type: CLEAR_TODO });
				}}
			>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoList;
