import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Button, {
	BUTTON_COLORS,
	BUTTON_TYPES,
} from '../../components/button/Button';

// Data
import { UserContext } from '../../contexts/userContext';

// Styles
import {
	NavigationContainer,
	InnerContainer,
	LinkStyles,
	Features,
	Title,
	Login,
	LinkScrollStyles,
} from './LandingNavigation.styles';

const LandingNavigation = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			<NavigationContainer>
				<InnerContainer>
					<LinkStyles to='/'>
						<Title>LinkMe</Title>
					</LinkStyles>
					<LinkScrollStyles to='features' spy={true} smooth={true}>
						<Features>Features</Features>
					</LinkScrollStyles>
				</InnerContainer>
				<InnerContainer>
					{user?.username ? (
						<LinkStyles to='/dashboard/links'>
							<Button color={BUTTON_COLORS.blue} type={BUTTON_TYPES.small}>
								Dashboard
							</Button>
						</LinkStyles>
					) : (
						<>
							<LinkStyles to='/login'>
								<Login>Login</Login>
							</LinkStyles>
							<LinkStyles to='/register'>
								<Button color={BUTTON_COLORS.blue} type={BUTTON_TYPES.small}>
									Create An Account
								</Button>
							</LinkStyles>
						</>
					)}
				</InnerContainer>
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default LandingNavigation;
