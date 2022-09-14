import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2.4rem 16rem;

	@media screen and (max-width: 1468px) {
		padding: 2rem 8rem;
	}

	@media screen and (max-width: 768px) {
		padding: 2rem 2rem;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const LinkStyles = styled(Link)`
	text-decoration: none;
	margin: 0 1rem;
	font-size: 18px;
	color: #000;

	@media screen and (max-width: 768px) {
		margin: 0 0.5rem;
	}
`;

export const LinkScrollStyles = styled(LinkScroll)`
	text-decoration: none;
	margin: 0 1rem;
	font-size: 18px;
	color: #000;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		margin: 0 0.5rem;
	}
`;

export const Features = styled.span`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const Title = styled.span`
	font-weight: bold;
	font-size: 24px;
	color: #000;
`;

export const Login = styled.span`
	font-weight: 500;
	color: #000;
`;
