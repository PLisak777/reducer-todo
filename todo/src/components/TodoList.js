import React from 'react';
import { CLEAR_TODO } from '../reducers/todoReducer';
import Todo from './Todo';

const TodoList = (props) => {
    console.log(props.initialTodoState)
	return (
		<div>
			{props.todos.map((newTodo) => (
				<Todo key={newTodo.id} newTodo={props.newTodo} />
			))}
            <button 
            className="clear" 
            onClick={() => {
                dispatch({ type: CLEAR_TODO });
            }}>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoList;
