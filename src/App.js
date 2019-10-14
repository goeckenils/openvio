import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Login from './components/Screens/Login';
import TaskView from '../src/components/Screens/TaskView';
import FinishedTasks from '../src/components/Screens/FinishedTasks';
import './App.css';

function App() {
	return (
		<Router>
			<AuthorizeFirst>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/tasks" component={Protected(TaskView)} />
					<Route exact path="/tasks/finished" component={Protected(FinishedTasks)} />
					<Redirect exact from="/" to="/tasks" />
				</Switch>
			</AuthorizeFirst>
		</Router>
	);
}

axios.interceptors.request.use(
	function(config) {
		const accessToken = window.localStorage['token'];
		// console.log('before request', accessToken);
		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
		}

		return config;
	},
	function(error) {
		return Promise.reject(error);
	}
);

const AuthorizeFirst = withRouter(({ children, history }) => {
	const [
		isFinished,
		setIsFinished
	] = React.useState(false);

	React.useEffect(() => {
		axios
			.post('http://localhost:3200/api/auth/authenticate')
			.then(() => {
				setIsFinished(true);
			})
			.catch(() => {
				delete window.localStorage.token;
				setIsFinished(true);
			});
	}, []);

	return isFinished ? children : null;
});

const Protected = (Component) => (props) => {
	const ConnectedComponent = withRouter(Component);

	return window.localStorage.token ? <ConnectedComponent {...props} /> : <Redirect to="/login" />;
};

export default App;
