import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AccountDropdownContainer = styled.div`
	position: absolute;
	z-index: 1;
	top: 100px;
	right: 130px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 25px 3px rgba(0, 0, 0, 0.15);
	padding: 20px;
	width: 250px;
	height: 400px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	align-items: center;

	@media screen and (max-width: 768px) {
		height: 450px;
		right: 50%;
		transform: translateX(50%);
	}
`;

export const AccountDropdownCircle = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

export const AccountUsername = styled.div``;

export const AccountEmail = styled.div``;

export const AccountSettings = styled.div`
	width: 80%;
`;

export const MobileShow = styled.span`
	display: none;
	@media screen and (max-width: 768px) {
		display: inline;
	}
`;

export const AccountSettingItem = styled(Link)`
	display: block;
	padding: 10px 0;
	border-top: 1px solid #ebebeb;
	text-decoration: none;
	color: #000;
	margin-top: 20px;
`;

export const AccountSettingLink = styled.a`
	display: block;
	padding: 10px 0;
	border-top: 1px solid #ebebeb;
	border-bottom: 1px solid #ebebeb;
	text-decoration: none;
	color: #000;
`;

export const LinkStyles = styled(Link)`
	position: absolute;
	bottom: 30px;
`;
