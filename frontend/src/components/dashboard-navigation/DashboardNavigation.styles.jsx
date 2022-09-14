import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 16rem;
	box-shadow: 0 0 25px 3px rgba(0, 0, 0, 0.15);

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

export const MobileHide = styled.span`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const LinkStyles = styled(Link)`
	text-decoration: none;
	color: #000;
	margin: 0 1rem;
	font-size: 18px;
	&:first-child {
		margin: 0 1rem 0 0;
	}
	&:last-child {
		margin: 0 0 0 1rem;
	}
`;

export const Title = styled.span`
	font-weight: bold;
	font-size: 24px;
`;

export const LinkItem = styled.span`
	font-weight: ${(props) => (props.isCurrentPage ? 600 : 400)};
`;

export const ProfileCircle = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	cursor: pointer;
	margin-left: 30px;
`;
