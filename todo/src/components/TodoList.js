import React, { useReducer } from 'react';
import { todoReducer, todos, CLEAR_TODO, TOGGLE_TODO } from '../reducers/todoReducer';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, todos);

    console.log('pl: TodoList.js: TodoList: reducer output', state, todos)

	return (
		<div>
			{todos.map((newTodo) => (
                <Todo 
                    key={newTodo.id} 
                    newTodo={newTodo} 
                    toggle={() => {
                        dispatch({ type: TOGGLE_TODO })
                    }} />
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
