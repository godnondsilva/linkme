import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
	padding: 2.4rem 16rem;

	@media screen and (max-width: 1468px) {
		padding: 2rem 8rem;
	}

	@media screen and (max-width: 768px) {
		padding: 2rem 2rem;
	}
`;

export const SiteTitle = styled(Link)`
	display: block;
	font-size: 24px;
	font-weight: bold;
	text-decoration: none;
	color: #000;
	padding-top: 1px;
`;

export const Title = styled.div`
	padding-top: 80px;
	font-size: 48px;
	font-weight: bold;

	@media screen and (max-width: 768px) {
		padding-top: 40px;
	}
`;

export const Subtitle = styled.div`
	font-size: 24px;
	font-weight: 500;
`;

export const ImageHolder = styled.img`
	position: fixed;
	top: 0;
	right: 0;

	transform: scale(1.5);

	@media screen and (max-width: 1668px) {
		right: calc(80vw - 100%);
	}
	@media screen and (max-width: 1268px) {
		display: none;
	}
`;

export const FormItemContainer = styled.div`
	padding-top: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const FormItem = styled.div`
	min-width: 180px;
	font-size: 24px;
`;

export const FormInput = styled.input`
	border: none;
	border-radius: 15px;
	padding: 20px 20px;
	width: 100%;
	max-width: 500px;
	font-size: 18px;
	box-sizing: border-box;
	transition: 0.3s;
	background-color: #eee;
	color: #444;

	&::placeholder {
		color: #444;
		font-size: 16px;
	}

	&:hover {
		outline: 1px solid #999;
	}

	&:focus {
		outline: none;
		outline: 1px solid #111;
	}

	@media screen and (max-width: 768px) {
		max-width: 100%;
		width: 100%;
	}
`;

export const ButtonContainer = styled.div`
	padding-top: 50px;

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

export const TextLink = styled(Link)`
	margin-left: 40px;
	color: #000;
	font-size: 18px;

	@media screen and (max-width: 768px) {
		margin-left: unset;
		padding-top: 20px;
		text-align: center;
	}
`;
