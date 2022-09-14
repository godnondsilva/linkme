import { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Components
import Button, {
	BUTTON_COLORS,
	BUTTON_TYPES,
} from '../../components/button/Button';

// Data
import { UserContext } from '../../contexts/userContext';
import { validateEmail } from '../../utils/validation/email';

// Styles
import {
	AccountContainer,
	InnerAccountContainer,
	AccountTitle,
	Subheading,
	AccountBoxContainer,
	FlexContainer,
	InputLabel,
	InputStyles,
	DisabledInputStyles,
} from './Account.styles';

const Account = () => {
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState(user.email);

	const handleChange = (e) => setEmail(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateEmail(email)) return toast.error('Please enter a valid email');
		try {
			toast.promise(
				axios.put(
					process.env.REACT_APP_BACKEND_URL + `/api/account/${user.uid}/update`,
					{ email },
				),
				{
					loading: 'Updating your account...',
					success: (res) => {
						setUser({
							...user,
							email,
						});
						return res.data.message;
					},
					error: (err) => {
						return err.response.data.message;
					},
				},
			);
		} catch {
			toast.error('Something went wrong.');
		}
	};

	const handleDelete = (e) => {
		e.preventDefault();
		try {
			toast.promise(
				axios.delete(
					process.env.REACT_APP_BACKEND_URL + `/api/account/${user.uid}/delete`,
				),
				{
					loading: 'Deleting your account...',
					success: (res) => {
						setUser({});
						navigate('/');
						return res.data.message;
					},
					error: (err) => {
						return err.response.data.message;
					},
				},
			);
		} catch {
			toast.error('Something went wrong.');
		}
	};

	return (
		<AccountContainer>
			<InnerAccountContainer>
				<AccountTitle>Account</AccountTitle>
				<Subheading>My Account</Subheading>
				<AccountBoxContainer>
					<FlexContainer>
						<InputLabel>Username:</InputLabel>
						<DisabledInputStyles
							placeholder='Enter your username'
							value={user.username}
							disabled
						/>
					</FlexContainer>
					<FlexContainer>
						<InputLabel>Email:</InputLabel>
						<InputStyles
							placeholder='Enter your email'
							name='email'
							onChange={handleChange}
							value={email}
						/>
					</FlexContainer>
					<Button
						type={BUTTON_TYPES.small}
						color={BUTTON_COLORS.blue}
						onClick={handleSubmit}
					>
						Save Changes
					</Button>
				</AccountBoxContainer>
				<Subheading>Account Management</Subheading>
				<Button
					type={BUTTON_TYPES.large}
					color={BUTTON_COLORS.red}
					onClick={handleDelete}
				>
					Delete My Account
				</Button>
			</InnerAccountContainer>
		</AccountContainer>
	);
};

export default Account;
