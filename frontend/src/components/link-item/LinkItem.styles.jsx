import styled from 'styled-components';

export const LinkContainer = styled.div`
	display: flex;
	padding: 1.2rem 1.2rem;
	gap: 20px;
	background: #eee;
	border: 1px solid #ddd;
	border-radius: 25px;
	max-width: 500px;
	align-items: center;

	@media screen and (max-width: 768px) {
		max-width: 300px;
	}
`;

export const LinkInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 60%;
`;

export const LinkOptionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 20px;
	margin-left: auto;
`;

export const LinkInput = styled.input`
	border: none;
	padding: 6px 15px;
	font-size: 14px;
	width: 100%;
	background-color: #ffffff;
	border-radius: 15px;

	&::placeholder {
		color: #444;
	}
	&:focus,
	&:hover {
		outline: 1px solid #999;
	}
`;

export const Switch = styled.label`
	position: relative;
	display: inline-block;
	width: 35px;
	height: 20px;
`;

export const Input = styled.input`
	opacity: 0;
	:checked {
		background-color: #2196f3;
	}
	:focus {
		box-shadow: 0 0 1px #2196f3;
	}
`;

export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #777;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;
	:before {
		position: absolute;
		content: '';
		height: 12px;
		width: 12px;
		left: 4px;
		bottom: 4px;
		background-color: #fff;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
		${Input}:checked + & {
			transform: translateX(14px);
		}
	}
	${Input}:checked + & {
		background-color: #2f84d3;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

export const Delete = styled.img`
	width: 20px;
	height: 20px;
	cursor: pointer;
`;

export const Save = styled.img`
	width: 18px;
	height: 18px;
	cursor: pointer;
`;
