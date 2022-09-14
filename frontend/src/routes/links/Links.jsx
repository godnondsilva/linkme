import axios from 'axios';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import LinkItem from '../../components/link-item/LinkItem';
import Button, {
	BUTTON_COLORS,
	BUTTON_TYPES,
} from '../../components/button/Button';
import { LinksContext } from '../../contexts/linksContext';
import { UserContext } from '../../contexts/userContext';
import {
	AddLinkContainer,
	FlexContainer,
	LinksContainer,
	LinksTitle,
} from './Links.styles';
import { refreshPreview } from '../../utils/helpers';

const Links = () => {
	const { user } = useContext(UserContext);
	const { links, setLinks } = useContext(LinksContext);

	const addLink = () => {
		if (links.length >= 5)
			return toast.error("You can't add more than 5 links");
		toast.promise(
			axios.post(
				process.env.REACT_APP_BACKEND_URL + `/api/link/${user.username}/add`,
				{
					title: '',
					url: '',
					visible: false,
				},
			),
			{
				loading: 'Creating a link...',
				success: (res) => {
					setLinks([...links, res.data.payload]);
					refreshPreview();
					return res.data.message;
				},
				error: (err) => {
					return err.response.data.message;
				},
			},
		);
	};

	return (
		<LinksContainer>
			<FlexContainer>
				<LinksTitle>My Links</LinksTitle>
				<Button
					color={BUTTON_COLORS.blue}
					type={BUTTON_TYPES.small}
					onClick={addLink}
				>
					Add New Link
				</Button>
			</FlexContainer>
			<AddLinkContainer>
				{links.length !== 0 ? (
					<>
						{links.map((link, idx) => (
							<LinkItem key={idx} link={link} />
						))}
					</>
				) : (
					<div>
						No links created. <br />
						Please click on the "+ Add new link" button to continue.
					</div>
				)}
			</AddLinkContainer>
		</LinksContainer>
	);
};

export default Links;
