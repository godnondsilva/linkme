import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import NotFound from '../../components/not-found/NotFound';
import Spinner from '../../components/spinner/Spinner';

// Data
import { USER_THEMES } from '../../data/userThemes';

// Styles
import DisplayStyles from '../../displayStyles';
import {
	DisplayContainer,
	DetailsContainer,
	ProfileImage,
	Username,
	Email,
	LinksContainer,
	LinkItem,
	Footer,
} from './Display.styles';

const Display = () => {
	const [user, setUser] = useState(null);
	const [links, setLinks] = useState([]);
	const [themeObject, setThemeObject] = useState(USER_THEMES.default);
	const [image, setImage] = useState('');
	const [loading, setLoading] = useState(true);
	// get params
	const params = useParams();

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BACKEND_URL + `/api/user/${params.username}`)
			.then((res) => {
				setUser(res.data.payload);
				setThemeObject(USER_THEMES[res.data.payload.theme]);
				setImage(
					process.env.REACT_APP_BACKEND_URL +
						`/api/image/${res.data.payload.image_url}`,
				);
				axios
					.get(
						process.env.REACT_APP_BACKEND_URL + `/api/links/${params.username}`,
					)
					.then((res) => {
						setLinks(res.data.payload);
						setLoading(false);
					});
			})
			.catch(() => {
				setLoading(false);
			});
	}, [params.username]);

	return !loading ? (
		user ? (
			<DisplayContainer theme={themeObject}>
				<DisplayStyles theme={themeObject} />
				<DetailsContainer theme={themeObject}>
					<ProfileImage src={image} />
					<Username>@{user.display_name}</Username>
					<Email>{user.description}</Email>
				</DetailsContainer>
				<LinksContainer>
					{links.map((link, idx) => {
						if (link.visible) {
							return (
								<LinkItem
									key={idx}
									theme={themeObject}
									href={link.url}
									rel='noreferrer'
									target='_blank'
								>
									{link.title}
								</LinkItem>
							);
						} else {
							return null;
						}
					})}
				</LinksContainer>
				<Footer theme={themeObject}>LinkMe</Footer>
			</DisplayContainer>
		) : (
			<NotFound />
		)
	) : (
		<Spinner />
	);
};

export default Display;
