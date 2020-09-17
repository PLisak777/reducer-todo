import React from 'react';

class TodoForm extends React.Component {
	state = {
		todo: '',
	};

	handleChange = (e) => {
		this.setState({
			todo: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: '',
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type="text"
					name="todo"
					placeholder="Add Todo"
					value={this.state.todo}
					onChange={this.handleChange}
				/>
				<button onClick={this.addTodo}>Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
