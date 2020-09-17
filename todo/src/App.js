import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

const App = () => {
	const [todos, setTodos] = useState([{
item: 'Learn about reducers',
  completed: false,
  id: 3892987589
    }])

	const toggleTodo = (todoId) => {
    setTodos({
      todos: todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todos,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  }

	const addTodo = (todoName) => {
		setTodos({
			todos: [
				...todos,
				{ item: todoName, id: Date.now(), completed: false },
			],
		});
	};

	const clearTodos = () => {
		setTodos({
			todos: todos.filter((todo) => {
				return !todo.completed;
			}),
		});
	};

		return (
			<div className="App">
				<div className="header">
					<h2>Input Todos Here</h2>
					<TodoForm addTodo={addTodo} />
				</div>
				<TodoList
					todos={todos}
					toggleTodo={toggleTodo}
					clearTodos={clearTodos}
				/>
			</div>
		);
	}

export default App;
