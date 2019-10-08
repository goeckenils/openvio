import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-final-form';
import { withRouter } from 'react-router';

import axios from 'axios';
import { Button, Secondary } from '../Base/button';
import logo from '../../assets/loginlogo.svg';
import { FormInput } from '../Base/input';

const Login = withRouter((props) => {
	const handleOnSubmit = ({ email, password }) => {
		axios
			.post('http://localhost:3200/api/auth/login', {
				email,
				password
			})
			.then((res) => res.data)
			.then((data) => {
				localStorage.setItem('token', data.accessToken);
			})
			.then(() => {
				props.history.push('/tasks');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<div className="background">
				<Container>
					<LogoWrapper>
						<img src={logo} alt="logo" />
					</LogoWrapper>
					<Form
						onSubmit={handleOnSubmit}
						render={({ handleSubmit }) => {
							return (
								<form onSubmit={handleSubmit}>
									<FormInput
										//validate={(value) => !value ? 'required' : undefined}
										placeholder="John@doe.com"
										label="Email"
										name="email"
									/>
									<FormInput type="password" label="Password" name="password" />
									<FlexWrapper>
										<H3>Forgott Password?</H3>
									</FlexWrapper>
									<Distance />
									<Button type="submit">Login</Button>
								</form>
							);
						}}
					/>
					<Secondary>Register</Secondary>
				</Container>
			</div>
		</div>
	);
});

export default Login;

export const Container = styled.div`padding: 0 20px;`;
export const Distance = styled.div`padding: 50px 0px;`;
export const LogoWrapper = styled.div`padding: 50px;`;

export const H3 = styled.div`
	font-size: 14px;
	text-decoration: underline;
	text-decoration-color: #1f3a60;
	color: #1f3a60;
`;
export const FlexWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
