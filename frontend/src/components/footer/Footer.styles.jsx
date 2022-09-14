import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div``;

export const UpperSection = styled.div`
	background-color: #eee;
	display: flex;
	justify-content: space-between;

	padding: 5rem 16rem 3rem 16rem;

	@media screen and (max-width: 1468px) {
		padding: 2rem 8rem;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		padding: 2rem 2rem;
	}
`;

export const Container = styled.div`
	width: 30%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const ContainerTitle = styled.div`
	font-size: 24px;
	font-weight: 700;
`;

export const ContainerDescription = styled.div`
	font-size: 18px;
`;

export const ContainerLink = styled(Link)`
	text-decoration: none;
	font-size: 18px;
	color: #111;
	display: block;

	&:hover {
		color: #2c47cc;
	}
`;

export const LowerSection = styled.div`
	background-color: #eee;
	margin-top: 1px solid #bbb;
	padding: 1rem 0;
	text-align: center;
`;

export const Text = styled.div``;
