import React, { useReducer } from 'react';
import { todoReducer, todos, CLEAR_TODO } from '../reducers/todoReducer';
import Todo from './Todo';

const TodoList = (props) => {
    const [state, dispatch] = useReducer(todoReducer, todos);

    console.log(todos)

	return (
		<div>
			{todos.map((newTodo) => (
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
