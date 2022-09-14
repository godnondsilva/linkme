// Images
import FeatureOne from '../../assets/feature-1.png';
import FeatureTwo from '../../assets/feature-2.png';
import FeatureThree from '../../assets/feature-3.png';

// Styles
import {
	Feature,
	FeatureCard,
	FeatureDescription,
	FeatureImage,
	FeaturesContainer,
	FeaturesHeading,
	FeatureSubheading,
	FlexContainer,
} from './Features.styles';

const Features = () => {
	const features = [
		{
			id: 1,
			title: 'Link Management',
			img: FeatureOne,
			bg: '#FFE5E5',
			scale: 1.0,
			description:
				'LinkMe offers a powerful link management service. Add upto 5 customizable links in our dashboard. ',
		},
		{
			id: 2,
			title: 'Theme management',
			img: FeatureTwo,
			scale: 1.1,
			bg: '#DFBEFF',
			description: 'We have a wide range of themes that can be used for free!',
		},
		{
			id: 3,
			title: 'Profile Management',
			img: FeatureThree,
			scale: 1.4,
			bg: '#FFF0E1',
			description:
				'You can customize your display name and your description and also add a custom profile image.',
		},
	];

	return (
		<FeaturesContainer id='features'>
			<FeaturesHeading>Features</FeaturesHeading>
			<FeatureSubheading>
				LinkMe offers a wide range of customization for your links, including
				link management, theme management and profile management
			</FeatureSubheading>
			<FlexContainer>
				{features.map((feature, idx) => (
					<FeatureCard key={idx} bg={feature.bg}>
						<Feature>{feature.title}</Feature>
						<FeatureImage
							scale={feature.scale}
							src={feature.img}
							alt={feature.title}
						/>
						<FeatureDescription>{feature.description}</FeatureDescription>
					</FeatureCard>
				))}
			</FlexContainer>
		</FeaturesContainer>
	);
};

export default Features;
