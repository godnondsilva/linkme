import styled from 'styled-components';

export const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem 4rem 3rem 16rem;

	@media (max-width: 768px) {
		padding: 3rem 2rem;
	}
`;

export const Title = styled.div`
	font-weight: bold;
	font-size: 24px;
`;

export const Subheading = styled.div`
	margin-top: 2rem;
	font-weight: 500;
	font-size: 24px;
`;

export const ProfileContainer = styled.div`
	margin-top: 1rem;
	background-color: #ebebeb;
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-radius: 30px;
	width: 60%;

	@media (max-width: 768px) {
		width: 100%;
		box-sizing: border-box;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: space-evenly;
`;

export const InnerFlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 100%;
`;

export const UploadButton = styled.input`
	display: none;
`;

export const ProfileImage = styled.img`
	width: 90px;
	height: 90px;
	border-radius: 50%;
`;

export const DisplayUsernameInput = styled.input`
	background-color: #fff;
	border: none;
	border-radius: 15px;
	padding: 10px 20px;
	font-size: 16px;

	&::placeholder {
		color: #898989;
		font-size: 16px;
	}

	@media (max-width: 768px) {
		min-width: 100%;
		box-sizing: border-box;
	}
`;

export const ProfileDescTextarea = styled.textarea`
	background-color: #fff;
	border: none;
	border-radius: 15px;
	padding: 10px 20px;
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
	resize: vertical;
	min-height: 50px;
	max-height: 200px;

	&::placeholder {
		font-family: Poppins;
		color: #898989;
		font-size: 16px;
	}

	@media (max-width: 768px) {
		min-width: 100%;
		box-sizing: border-box;
	}
`;
