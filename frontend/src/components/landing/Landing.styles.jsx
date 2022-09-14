import styled from 'styled-components';

export const LandingContainer = styled.div`
	padding: 0 16rem;

	@media screen and (max-width: 1468px) {
		padding: 2rem 8rem;
	}

	@media screen and (max-width: 768px) {
		padding: 2rem 2rem;
	}
`;

export const InnerContainer = styled.div`
	height: 80vh;
	display: flex;

	@media screen and (max-width: 768px) {
		height: 75vh;
		flex-direction: column;
		justify-content: center;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const Title = styled.div`
	font-size: 96px;
	font-weight: 700;

	@media (max-width: 1668px) {
		font-size: 72px;
	}

	@media (max-width: 1468px) {
		font-size: 64px;
	}

	@media (max-width: 768px) {
		font-size: 32px;
	}
`;

export const Subtitle = styled.div`
	padding-top: 1rem;
	font-size: 32px;
	font-weight: 500;
	color: #111;

	@media (max-width: 1468px) {
		font-size: 20px;
	}

	@media (max-width: 768px) {
		font-size: 18px;
	}
`;

export const FlexContainer = styled.div`
	padding-top: 2.5rem;
	display: flex;
	gap: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const UsernameInputContainer = styled.div`
	padding: 1rem 2rem;
	border: none;
	border-radius: 20px;
	background-color: #eee;
	color: #000;
	font-size: 20px;
	display: flex;
	align-items: center;
`;

export const UsernameInput = styled.input`
	padding: 0.5rem 0;
	border: none;
	border-radius: 15px;
	font-size: 20px;
	width: 150px;
	color: #444;
	background-color: transparent;

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: #888;
	}
`;
