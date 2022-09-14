import styled from 'styled-components';

export const ThemesContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem 4rem 3rem 16rem;

	@media (max-width: 768px) {
		padding: 3rem 2rem;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const ThemesTitle = styled.div`
	font-weight: bold;
	font-size: 24px;
`;

export const ThemesList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	grid-gap: 30px;
	padding-top: 40px;
	width: 80%;

	@media (max-width: 768px) {
		width: 100%;
	}
`;
