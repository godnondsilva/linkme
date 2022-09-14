import styled from 'styled-components';

export const FeaturesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4rem 16rem 6rem 16rem;

	@media screen and (max-width: 1468px) {
		padding: 2rem 8rem 4rem 8rem;
	}

	@media screen and (max-width: 768px) {
		padding: 2rem 2rem;
	}
`;

export const FeaturesHeading = styled.div`
	font-size: 64px;
	font-weight: 700;
`;

export const FeatureSubheading = styled.div`
	padding-top: 1.5rem;
	font-weight: 500;
	font-size: 24px;
	text-align: center;
`;

export const FlexContainer = styled.div`
	display: flex;
	gap: 6rem;
	padding-top: 3rem;

	@media screen and (max-width: 1268px) {
		gap: 3rem;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export const FeatureCard = styled.div`
	background-color: ${(props) => props.bg};
	padding: 2.5rem 2rem;
	width: 250px;
	border-radius: 20px;
	text-align: center;
`;

export const Feature = styled.div`
	font-size: 18px;
	font-weight: 600;
`;

export const FeatureImage = styled.img`
	width: 70px;
	padding: 1rem 0;
	transform: scale(${(props) => props.scale});
`;

export const FeatureDescription = styled.div``;
