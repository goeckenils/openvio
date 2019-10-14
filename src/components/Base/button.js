import styled from 'styled-components';

export const Button = styled.button`
	padding: 15px 30px;
	background-color: #1f3a60;
	color: white;
	font-weight: bold;
	font-size: 14px;
	width: 100%;
	border: 0;
	outline: 0;
	margin: 10px 0px;
	border-radius: 4px;
	cursor: pointer;
	display: block;
	transition: all 0.3s ease;

	&:hover {
		background-color: rgb(31, 58, 96, 0.8);
	}
	&:focus {
		background-color: rgb(31, 58, 96, 0.7);
	}
`;
export const Secondary = styled.button`
	padding: 15px 30px;
	background-color: transparent;
	border: 1px solid #1f3a60;
	color: #1f3a60;
	font-weight: bold;
	font-size: 14px;
	width: 100%;
	outline: 0;
	margin: 10px 0px;
	border-radius: 4px;
	cursor: pointer;
	display: block;
	transition: all 0.3s ease;

	&:hover {
		background-color: rgb(31, 58, 96, 0.8);
		color: #fff;
	}
	&:focus {
		background-color: rgb(31, 58, 96, 0.7);
		color: #fff;
	}
`;

export default Button;
