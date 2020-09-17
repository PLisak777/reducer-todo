import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log(props.todos)
	return (
		<div>
			{props.todos.map((newTodo) => (
				<Todo key={newTodo.id} newTodo={newTodo} toggleTodo={props.toggleTodo} />
			))}
			<button className="clear" onClick={props.clearTodos}>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoList;
