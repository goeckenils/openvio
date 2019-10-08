import React, { Component } from 'react';
import Menu from '../Interface/Menu';

class TaskView extends Component {
	render() {
		return (
			<div>
				<Menu onSubmit={() => console.log('on submit')} onCancel={() => console.log('on cancel')}>
					{({ status }) => {
						return status ? <p>show</p> : null;
					}}
				</Menu>
			</div>
		);
	}
}

export default TaskView;
