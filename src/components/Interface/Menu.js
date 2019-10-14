import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Rewind } from '../../assets/icons/rewind.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: false
		};
	}

	changeMode() {
		if (this.state.status) {
			return this.onSubmit();
		} else {
			this.setState({
				status: true
			});
		}
	}

	onSubmit = () => {
		const result = Promise.resolve(this.props.onSubmit && this.props.onSubmit());

		return result.then(() => {
			this.setState({
				status: false
			});
		});
	};

	onCancel = () => {
		this.setState({
			status: false
		});
		this.props.onCancel && this.props.onCancel();
	};

	render() {
		return (
			<div>
				<AddButton onClick={this.changeMode.bind(this)} status={this.state.status}>
					<IconWrapper status={this.state.status}>{!this.state.status ? <Plus /> : <Check />}</IconWrapper>
				</AddButton>
				<MenuWrapper status={this.state.status}>
					<Content>{this.props.children && this.props.children({ status: this.state.status })}</Content>
					<MenuIcons>
						<Link to="/tasks">
							<HomeIcon homeactive={this.props.homeactive} />
						</Link>
						<Link to="/tasks/finished">
							<RewindIcon rewindactive={this.props.rewindactive} />
						</Link>
					</MenuIcons>
				</MenuWrapper>
			</div>
		);
	}
}

export default Menu;

export const MenuWrapper = styled.div`
	height: ${(props) => (props.status ? 400 : 60)}px;
	width: 100%;
	background: #f7f8fa;
	position: fixed;
	display: flex;
	flex-direction: column;
	bottom: 0;
	-webkit-box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.05);
	-moz-box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.05);
	box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.05);
	display: flex;
	align-items: center;
	transition: all 0.3s ease-in-out;
`;

export const HomeIcon = styled(Home)`
	width: 30px;
	height: 30px;
	fill: ${(props) => (props.homeactive ? css`#1f3a60` : css`#b4bece`)};
`;

export const RewindIcon = styled(Rewind)`
	width: 30px;
	height: 30px;
	fill: ${(props) => (props.rewindactive ? css`#1f3a60` : css`#b4bece`)};
`;

const Content = styled.div`
	flex: 1 0 auto;
	width: 100%;
`;

export const AddButton = styled.button`
	width: 60px;
	height: 60px;
	cursor: pointer;
	background: #f97272;
	transition: all 0.3s ease-in-out;
	border-radius: 50px;
	position: fixed;
	bottom: 30px;
	left: 42%;
	outline: none;
	border: none;
	z-index: 2;
	-webkit-box-shadow: 0px 4px 8px 0px rgba(249, 114, 114, 0.4);
	-moz-box-shadow: 0px 4px 8px 0px rgba(249, 114, 114, 0.4);
	box-shadow: 0px 4px 8px 0px rgba(249, 114, 114, 0.4);

	${(props) =>
		props.status
			? css`
					background-color: #65d499;
					box-shadow: 0px 4px 8px 0px rgba(101, 212, 153, 0.4);
				`
			: css`
					background-color: #f97272;
					box-shadow: 0px 4px 8px 0px rgba(249, 114, 114, 0.4);
				`};
`;
export const IconWrapper = styled.div`
	padding: 15px;
	z-index: 4;
`;

export const MenuIcons = styled.div`
	padding: 0 60px;
	display: flex;
	height: 60px;
	flex: 0 0 auto;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
`;
