import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button, { BUTTON_COLORS, BUTTON_TYPES } from '../button/Button';

// Styles
import {
	Container,
	InnerContainer,
	LandingContainer,
	Title,
	Subtitle,
	FlexContainer,
	UsernameInputContainer,
	UsernameInput,
} from './Landing.styles';

const Landing = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = (e) => {
		navigate('/register', { state: username });
	};

	return (
		<>
			<LandingContainer>
				<InnerContainer>
					<Container>
						<Title>A micro-landing page, customized for you.</Title>
						<Subtitle>
							Share everything about yourself, all with the help of a single
							link
						</Subtitle>
						<FlexContainer>
							<UsernameInputContainer>
								linkme.com/
								<UsernameInput
									placeholder='username'
									value={username}
									onChange={handleChange}
								/>
							</UsernameInputContainer>
							<Button
								color={BUTTON_COLORS.blue}
								type={BUTTON_TYPES.large}
								onClick={handleSubmit}
							>
								Get started
							</Button>
						</FlexContainer>
					</Container>
				</InnerContainer>
			</LandingContainer>
		</>
	);
};

export default Landing;
