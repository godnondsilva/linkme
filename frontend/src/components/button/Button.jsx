import { LargeButton, MediumButton, SmallButton } from './Button.styles';

export const BUTTON_TYPES = {
	small: 'small',
	medium: 'medium',
	large: 'large',
};

export const BUTTON_COLORS = {
	blue: '#95CCFF',
	pink: '#EFC1FF',
	red: '#FFA4B4',
};

const getButtonType = (type) =>
	({
		[BUTTON_TYPES.small]: SmallButton,
		[BUTTON_TYPES.medium]: MediumButton,
		[BUTTON_TYPES.large]: LargeButton,
	}[type]);

const Button = ({ children, color, type, ...otherProps }) => {
	const ButtonContainer = getButtonType(type);
	return (
		<ButtonContainer color={color} {...otherProps}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
