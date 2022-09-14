import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
`;

export const InnerMainContainer = styled.div`
	overflow-y: scroll;
	width: 60%;
	height: 88vh;

	@media (max-width: 1268px) {
		width: 100%;
		overflow-y: auto;
	}
`;
