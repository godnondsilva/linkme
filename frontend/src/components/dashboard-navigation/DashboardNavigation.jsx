import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

// Components
import Button, {
	BUTTON_COLORS,
	BUTTON_TYPES,
} from '../../components/button/Button';
import AccountDropdown from '../../components/account-dropdown/AccountDropdown';

// Data
import { UserContext } from '../../contexts/userContext';

// Styles
import {
	NavigationContainer,
	InnerContainer,
	LinkStyles,
	Title,
	LinkItem,
	ProfileCircle,
	MobileHide,
} from './DashboardNavigation.styles';

const DashboardNavigation = ({ type }) => {
	const { user } = useContext(UserContext);
	const [visible, setVisible] = useState(false);
	const copyLink = () => {
		navigator.clipboard.writeText(
			process.env.REACT_APP_FRONTEND_URL + `/${user.username}`,
		);
		toast.success('Your link has been copied to clipboard');
	};

	const handleVisibility = () => setVisible(!visible);

	const [image, setImage] = useState(user.image_url ? user.image_url : '');
	const [page, setPage] = useState('links');

	useEffect(() => {
		setImage(user.image_url);
	}, [user.image_url]);

	useEffect(() => {
		setPage(window.location.pathname.split('/')[2]);
	}, []);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (e.target.id !== 'profile-icon' && e.path[0].id !== 'dropdown') {
				setVisible(false);
			}
		};
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<>
			<NavigationContainer>
				<InnerContainer>
					<LinkStyles to='/'>
						<Title>LinkMe</Title>
					</LinkStyles>
					<Button
						onClick={copyLink}
						color={BUTTON_COLORS.pink}
						type={BUTTON_TYPES.small}
					>
						Share My Link
					</Button>
				</InnerContainer>
				<InnerContainer>
					<MobileHide>
						<LinkStyles to='/dashboard/links' onClick={() => setPage('links')}>
							<LinkItem isCurrentPage={page === 'links'}>Links</LinkItem>
						</LinkStyles>
						<LinkStyles
							to='/dashboard/themes'
							onClick={() => setPage('themes')}
						>
							<LinkItem isCurrentPage={page === 'themes'}>Themes</LinkItem>
						</LinkStyles>
						<LinkStyles
							to='/dashboard/settings'
							onClick={() => setPage('settings')}
						>
							<LinkItem isCurrentPage={page === 'settings'}>Settings</LinkItem>
						</LinkStyles>
					</MobileHide>
					<ProfileCircle
						id='profile-icon'
						onClick={handleVisibility}
						src={image}
					/>
					<AccountDropdown visible={visible} />
				</InnerContainer>
			</NavigationContainer>
			{type === 'account' ? <Outlet /> : null}
		</>
	);
};

export default DashboardNavigation;
