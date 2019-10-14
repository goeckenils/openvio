import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Button from '../Base/button';

class Task extends Component {
	render() {
		return (
			<Wrapper>
				<Card>
					<FlexContainer>
						<TextWrapper>
							<Title>{this.props.title}</Title>
						</TextWrapper>
						<TextWrapper>
							<Tag>{this.props.category}</Tag>
						</TextWrapper>
					</FlexContainer>
					<TextWrapper>
						<Desc>{this.props.description}</Desc>
					</TextWrapper>
					<FlexContainer>
						<Group>
							<Author>
								<img width="28px" height="28px" src={`https:${this.props.gravatar}`} alt="" />
							</Author>
							<Desc style={{ padding: '5px' }}>{this.props.name}</Desc>
						</Group>
						<CheckButton onClick={() => this.props.onCheck(this.props.id)} checked={this.props.checked}>
							{this.props.value}
						</CheckButton>
					</FlexContainer>
				</Card>
			</Wrapper>
		);
	}
}

export default Task;

const Card = styled.div`
	width: 100%;
	height: 143px;
	background: white;
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	padding: 20px;
	-webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
	-moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
	box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
`;

const Author = styled.div`
	width: 30px;
	height: 30px;
	border: 1px solid white;
	overflow: hidden;
	border-radius: 20px;
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 0 0 auto;
`;
const CheckButton = styled(Button)`
    font-size: 10px;
    color: white;
    padding: 9px 0px;
    width: 70px;
	margin: 0;
	background: ${(props) => (props.checked ? css` #f97272` : css` #1f3a60`)};
`;

const Group = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Tag = styled.div`
	text-align: right;
	font-size: 10px;
	color: #00a7e1;
`;

const Wrapper = styled.div`padding: 10px 0px;`;

const TextWrapper = styled.div`
	padding: 5px 0px;
	flex: 0 1 100%;
`;

const Title = styled.h3`
	color: #1f3a60;
	font-size: 14px;
`;

const Desc = styled.h4`
	font-size: 10px;
	color: rgba(31, 58, 96, 0.7);
`;
