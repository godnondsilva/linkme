import styled, { css } from 'styled-components';

const buttonStyles = css`
	border: none;
	border-radius: 20px;
	font-weight: 500;
	cursor: pointer;
	color: #000;
	background-color: ${(props) => props.color};
	&:hover {
		box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
	}
	transition: all ease-in-out 150ms;
`;

export const SmallButton = styled.button`
	${buttonStyles};
	padding: 0.5rem 2.5rem;
	font-size: 18px;

	@media screen and (max-width: 768px) {
		padding: 0.5rem 1rem;
	}
`;

export const MediumButton = styled.button`
	${buttonStyles};
	padding: 0.7rem 3rem;
	font-size: 20px;
`;

export const LargeButton = styled.button`
	${buttonStyles};
	padding: 1.3rem 4rem;
	font-size: 20px;
`;
