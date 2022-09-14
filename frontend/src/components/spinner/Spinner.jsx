// Styles
import {
	LoadingContainer,
	SpinnerOverlay,
	SpinnerContainer,
} from './Spinner.styles';

const Spinner = () => (
	<LoadingContainer>
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
		Loading
	</LoadingContainer>
);

export default Spinner;
