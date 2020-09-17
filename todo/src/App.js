import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

const todos = [
	{
		task: 'Todo 1',
		id: 123,
		completed: false,
	},
	{
		task: 'Todo 2',
		id: 124,
		completed: false,
	},
	{
		task: 'Todo 3',
		id: 125,
		completed: false,
	},
];

class App extends React.Component {
	state = {
		todos: todos,
	};

	toggleTodo = (todoId) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === todoId) {
					return {
						...todos,
						completed: !todo.completed,
					};
				}
				return todo;
			}),
		});
	};

	addTodo = (todoName) => {
		this.setState({
			todos: [
				...this.state.todos,
				{ task: todoName, id: Date.now(), completed: false },
			],
		});
	};

	clearTodos = () => {
		this.setState({
			todos: this.state.todos.filter((todo) => {
				return !todo.completed;
			}),
		});
	};

	render() {
		return (
			<div className="App">
				<div className="header">
					<h2>Input Todos Here</h2>
					<TodoForm addTodo={this.addTodo} />
				</div>
				<TodoList
					todos={this.state.todos}
					toggleTodo={this.toggleTodo}
					clearTodos={this.clearTodos}
				/>
			</div>
		);
	}
}

export default App;
