import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from 'react-final-form';
import Menu from '../Interface/Menu';
import { FormInput } from '../Base/input';
import { FormTextarea } from '../Base/textarea';
import Task from '../Interface/Task';
import axios from 'axios';

class TaskView extends Component {
	state = {
		tasks: []
	};

	componentDidMount() {
		this.fetchTasks();
	}

	onSubmit = ({ title, description }, form) => {
		axios
			.post('http://localhost:3200/api/tasks', {
				title,
				description
			})
			.then((res) => console.log(res.data))
			.then(this.fetchTasks)
			.then(() => {
				setTimeout(form.reset);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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

	finishTask = (id) => {
		axios
			.patch(`http://localhost:3200/api/tasks/${id}`, { id, isCompleted: true })
			.then(this.fetchTasks)
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const tasks = this.state.tasks.filter((task) => {
			return !task.isCompleted ? true : false;
		});
		console.log(tasks);

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
								onCheck={this.finishTask}
								gravatar={task.author.avatar}
								id={task.id}
								checked={false}
								value="Done"
							/>
						);
					})}
				</Container>
				<Distance />
				<Form
					onSubmit={this.onSubmit}
					initialValues={{ title: '', description: '' }}
					render={({ handleSubmit, form }) => {
						return (
							<Menu onSubmit={handleSubmit} homeactive="true" onCancel={() => console.log('on cancel')}>
								{({ status }) => {
									return status ? (
										<Container>
											<Wrapper>
												<FormInput name="title" label="Title" placeholder="Enter your title" />
												<FormTextarea
													name="description"
													label="Description"
													placeholder="Enter your message here"
												/>
											</Wrapper>
										</Container>
									) : null;
								}}
							</Menu>
						);
					}}
				/>
			</div>
		);
	}
}

export default TaskView;

const Container = styled.div`
	width: 100%;
	padding: 0px 20px;
`;

const Wrapper = styled.div`padding: 20px 0px;`;

const Distance = styled.div`height: 60px;`;
