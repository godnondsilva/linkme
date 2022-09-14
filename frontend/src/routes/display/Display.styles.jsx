import styled from 'styled-components';

export const DisplayContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
	/* background-color: #fff; */
	background-color: ${(props) => props.theme.background};
	padding: 40px 0;
`;

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${(props) => props.theme.details};
`;

export const ProfileImage = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: #eee;
`;

export const Username = styled.div`
	padding-top: 10px;
	font-size: 1.4rem;
	font-weight: 600;
`;

export const Email = styled.div`
	font-size: 1rem;
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
`;

export const LinkItem = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.linkBackground};
	color: ${(props) => props.theme.linkText};
	width: 480px;
	height: 80px;
	border-radius: 15px;
	text-decoration: none;

	@media (max-width: 768px) {
		width: 300px;
		height: 60px;
	}
`;

export const Footer = styled.div`
	position: fixed;
	bottom: 10px;
	font-size: 1.5rem;
	font-weight: 600;

	color: ${(props) => props.theme.details};
`;
