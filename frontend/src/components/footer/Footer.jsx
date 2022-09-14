// Styles
import {
	Container,
	ContainerDescription,
	ContainerLink,
	ContainerTitle,
	FooterContainer,
	LowerSection,
	Text,
	UpperSection,
} from './Footer.styles';

const Footer = () => {
	return (
		<FooterContainer>
			<UpperSection>
				<Container>
					<ContainerTitle>LinkMe</ContainerTitle>
					<ContainerDescription>
						LinkMe is a micro-landing page creator for anyone looking to list
						their links using a single site.
					</ContainerDescription>
				</Container>
				<Container>
					<ContainerTitle>Quick Links</ContainerTitle>
					<ContainerLink to='/'>Home</ContainerLink>
					<ContainerLink to='/register'>Register</ContainerLink>
					<ContainerLink to='/login'>Login</ContainerLink>
				</Container>
			</UpperSection>
			<LowerSection>
				<Text>Copyright © 2022 LinkMe. All Rights Reserved</Text>
			</LowerSection>
		</FooterContainer>
	);
};

export default Footer;
