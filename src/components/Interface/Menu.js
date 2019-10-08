import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: false
		};
	}

	changeMode() {
		const status = !this.state.status;
		this.setState({
			status
		});

		if (!status) {
			this.props.onSubmit && this.props.onSubmit();
		}
	}

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
					<IconWrapper status={this.state.status}>
						{!this.state.status ? (
							<svg viewBox="0 0 32 32" version="1.1" fill="#ffffff">
								<g>
									<path d="M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z " />
								</g>
							</svg>
						) : (
							<svg viewBox="0 0 32 32" version="1.1" fill="#ffffff">
								<g id="surface1">
									<path d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z " />
								</g>
							</svg>
						)}
					</IconWrapper>
				</AddButton>
				<MenuWrapper status={this.state.status}>
					<Content>{this.props.children && this.props.children({ status: this.state.status })}</Content>
					<MenuIcons>
						<svg viewBox="0 0 32 32" style={{ width: '30px', height: '30px' }} version="1.1" fill="#1F3A60">
							<g>
								<path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z " />
							</g>
						</svg>
						<svg
							onClick={this.onCancel}
							viewBox="0 0 32 32"
							version="1.1"
							fill="#B4BECE"
							style={{ width: '30px', height: '30px' }}
						>
							<g>
								<path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 L 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 C 19.703125 6 22.898438 8.019531 24.625 11 L 21 11 L 21 13 L 28 13 L 28 6 L 26 6 L 26 9.34375 C 23.847656 6.113281 20.167969 4 16 4 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z " />
							</g>
						</svg>
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
	position: absolute;
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

const Content = styled.div`flex: 1 0 auto;`;

export const AddButton = styled.button`
	width: 60px;
	height: 60px;
	cursor: pointer;
	background: #f97272;
	transition: all 0.3s ease-in-out;
	border-radius: 50px;
	position: absolute;
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
