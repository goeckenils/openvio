import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from '../Interface/Menu';
import { FormInput } from '../Base/input';
import { FormTextarea } from '../Base/textarea';
import Task from '../Interface/Task';
import axios from 'axios';

class FinishedTasks extends Component {
	state = {
		tasks: []
	};

	componentDidMount() {
		this.fetchTasks();
	}

	fetchTasks = () => {
		axios
			.get('http://localhost:3200/api/tasks')
			.then((res) => {
				const tasks = res.data;
				this.setState({ tasks: tasks });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	deleteTask = (id) => {
		axios.delete(`http://localhost:3200/api/tasks/${id}`).then(this.fetchTasks).catch((err) => {
			console.log(err);
		});
	};

	render() {
		const tasks = this.state.tasks.filter((task) => {
			return task.isCompleted ? true : false;
		});
		return (
			<div className="background">
				<Container>
					{tasks.map((task) => {
						return (
							<Task
								title={task.title}
								key={task.id}
								category={task.category.toUpperCase()}
								description={task.description}
								name={task.author.name}
								onCheck={this.deleteTask}
								gravatar={task.author.avatar}
								id={task.id}
								checked={true}
								value="Delete"
							/>
						);
					})}
				</Container>
				<Menu rewindactive="true" />
			</div>
		);
	}
}

export default FinishedTasks;

const Container = styled.div`
	width: 100%;
	padding: 0px 20px;
`;
