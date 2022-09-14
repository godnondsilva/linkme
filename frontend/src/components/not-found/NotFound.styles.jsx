import styled from 'styled-components';

export const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const Text = styled.div`
	font-size: 2rem;
	font-weight: 600;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
