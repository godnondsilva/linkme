import styled from 'styled-components';

export const AccountContainer = styled.div`
	padding: 3rem 16rem;

	@media screen and (max-width: 1468px) {
		padding: 2rem 8rem;
	}

	@media screen and (max-width: 768px) {
		padding: 2rem 2rem;
	}
	display: flex;
`;

export const InnerAccountContainer = styled.div`
	width: 60%;
	@media screen and (max-width: 1468px) {
		width: 100%;
	}
`;

export const AccountTitle = styled.div`
	font-weight: bold;
	font-size: 24px;
`;

export const Subheading = styled.div`
	margin-top: 2rem;
	font-weight: 500;
	font-size: 24px;
	margin-bottom: 1rem;
`;

export const AccountBoxContainer = styled.div`
	background-color: #ebebeb;
	padding: 40px 40px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	border-radius: 30px;
	width: 80%;
	box-sizing: border-box;

	@media (max-width: 1268px) {
		width: 100%;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`;

export const InputLabel = styled.label`
	width: 25%;
	font-size: 20px;
`;

export const DisabledInputStyles = styled.input`
	background-color: #d7d7d7;
	color: #898989;
	border: none;
	border-radius: 15px;
	padding: 10px 20px;
	width: 75%;
	font-size: 18px;
	box-sizing: border-box;

	&::placeholder {
		color: #898989;
		font-size: 16px;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const InputStyles = styled.input`
	background-color: #fff;
	border: none;
	border-radius: 15px;
	padding: 10px 20px;
	font-size: 18px;
	width: 75%;
	box-sizing: border-box;

	&::placeholder {
		color: #898989;
		font-size: 16px;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;
