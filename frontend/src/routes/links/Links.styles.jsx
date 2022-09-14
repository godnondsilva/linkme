import styled from 'styled-components';

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem 4rem 3rem 16rem;

	@media (max-width: 768px) {
		padding: 3rem 2rem;
	}
`;

export const AddLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding-top: 30px;
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const LinksTitle = styled.div`
	font-weight: bold;
	font-size: 24px;
`;
