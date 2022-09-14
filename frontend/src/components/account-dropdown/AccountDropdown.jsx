import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

// Components
import Button, { BUTTON_COLORS, BUTTON_TYPES } from '../button/Button';

// Data
import { UserContext } from '../../contexts/userContext';

// Styles
import {
	AccountDropdownCircle,
	AccountDropdownContainer,
	AccountEmail,
	AccountSettings,
	AccountSettingItem,
	AccountUsername,
	LinkStyles,
	AccountSettingLink,
	MobileShow,
} from './AccountDropdown.styles';

const AccountDropdown = ({ visible }) => {
	const { user, setUser } = useContext(UserContext);
	const handleLogout = () => {
		setUser(null);
		toast.success('You have been logged out');
	};

	const [image, setImage] = useState(user.image_url ? user.image_url : '');

	useEffect(() => {
		setImage(user.image_url);
	}, [user.image_url]);

	return visible ? (
		<AccountDropdownContainer id='dropdown'>
			<AccountDropdownCircle src={image} />
			<AccountUsername>@{user.username}</AccountUsername>
			<AccountEmail>{user.email}</AccountEmail>
			<AccountSettings>
				<MobileShow>
					<AccountSettingItem to='/dashboard/links'>Links</AccountSettingItem>
					<AccountSettingItem to='/dashboard/themes'>Themes</AccountSettingItem>
					<AccountSettingItem to='/dashboard/settings'>
						Settings
					</AccountSettingItem>
				</MobileShow>
				<AccountSettingItem to='/account'>Account</AccountSettingItem>
				<AccountSettingLink
					rel='noreferrer'
					target='_blank'
					href={`${process.env.REACT_APP_FRONTEND_URL}/${user.username}`}
				>
					View My LinkMe
				</AccountSettingLink>
			</AccountSettings>
			<LinkStyles to='/login'>
				<Button
					onClick={handleLogout}
					type={BUTTON_TYPES.small}
					color={BUTTON_COLORS.red}
				>
					Logout
				</Button>
			</LinkStyles>
		</AccountDropdownContainer>
	) : (
		<></>
	);
};

export default AccountDropdown;
