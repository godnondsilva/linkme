import { useContext, useState } from 'react';

// Components
import Button, { BUTTON_COLORS, BUTTON_TYPES } from '../button/Button';
import Spinner from '../spinner/Spinner';

// Data
import { UserContext } from '../../contexts/userContext';
import { refreshPreview } from '../../utils/helpers';

// Styles
import {
	PreviewOuterContainer,
	PreviewContainer,
	Title,
	PreviewBox,
	Iframe,
} from './Preview.styles';

const Preview = () => {
	const { user } = useContext(UserContext);
	const [loading, setLoading] = useState(true);
	setTimeout(() => setLoading(false), 500);

	return (
		<PreviewOuterContainer>
			<PreviewContainer>
				{!loading ? (
					<>
						<Title>Preview</Title>
						<PreviewBox>
							<Iframe
								id='preview-iframe'
								title='preview'
								src={`${process.env.REACT_APP_FRONTEND_URL}/${user.username}`}
								frameborder='0'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							></Iframe>
						</PreviewBox>
						<Button
							color={BUTTON_COLORS.blue}
							type={BUTTON_TYPES.small}
							onClick={refreshPreview}
						>
							Refresh
						</Button>
					</>
				) : (
					<Spinner />
				)}
			</PreviewContainer>
		</PreviewOuterContainer>
	);
};

export default Preview;
