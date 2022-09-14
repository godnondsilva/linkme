import styled from 'styled-components';

export const ThemeOuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ThemeCardContainer = styled.div`
	width: 140px;
	height: 240px;
	background-color: ${(props) => props.theme.background};
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	cursor: pointer;

	border: ${(props) =>
		props.isCurrentTheme ? '2px solid #85C4FF' : '1px solid #fff'};

	box-shadow: ${(props) =>
		props.isCurrentTheme ? '0px 0px 15px #85C4FF' : 'none'};
`;

export const Card = styled.div`
	width: 100px;
	height: 30px;
	border-radius: 15px;
	background-color: ${(props) => props.theme.linkBackground};
`;
