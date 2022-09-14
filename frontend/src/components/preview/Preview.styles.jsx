import styled from 'styled-components';

export const PreviewOuterContainer = styled.div`
	width: 40%;
	background-color: #eee;
	position: fixed;
	right: 0;
	height: 100%;

	@media (max-width: 1268px) {
		display: none;
	}
`;

export const PreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 90%;
`;

export const Title = styled.div`
	font-weight: bold;
	font-size: 24px;
	padding-bottom: 10px;
`;

export const PreviewBox = styled.div`
	padding-bottom: 10px;
`;

export const Iframe = styled.iframe`
	width: 340px;
	height: 600px;
	border: 5px solid #000;
	background-color: #fff;
	border-radius: 30px;
`;
