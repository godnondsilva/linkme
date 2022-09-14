import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

// Data
import * as animationData from '../../data/not-found.json';

// Styles
import { NotFoundContainer, Text } from './NotFound.styles';

const NotFound = () => {
	const [size, setSize] = useState(500);
	useEffect(() => {
		if (window.innerWidth < 768) {
			setSize(300);
		}
	}, []);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<NotFoundContainer>
			<Lottie options={defaultOptions} height={size} width={size} />
			<Text>Oh no! We could not find that user!</Text>
		</NotFoundContainer>
	);
};

export default NotFound;
