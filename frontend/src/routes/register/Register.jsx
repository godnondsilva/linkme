import toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

// Components
import Button, {
	BUTTON_COLORS,
	BUTTON_TYPES,
} from '../../components/button/Button';

// Data
import { validateRegister } from '../../utils/validation/register';
import { validateEmail } from '../../utils/validation/email';

// Images
import RegisterImage from '../../assets/auth-image.png';

// Styles
import {
	RegisterContainer,
	SiteTitle,
	ImageHolder,
	Title,
	Subtitle,
	FormItem,
	FormInput,
	FormItemContainer,
	ButtonContainer,
	TextLink,
} from './Register.styles';

const Register = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const initialState = {
		email: '',
		username: location?.state ? location.state : '',
		password: '',
	};

	const [registerUser, setRegisterUser] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setRegisterUser({
			...registerUser,
			[name]: value,
		});
	};

	const handleRegister = async () => {
		if (
			!validateRegister(
				registerUser.username,
				registerUser.email,
				registerUser.password,
			)
		)
			return toast.error('Please fill in all the fields');
		if (!validateEmail(registerUser.email))
			return toast.error('Please enter a valid email');
		try {
			toast.promise(
				axios.post(
					process.env.REACT_APP_BACKEND_URL + '/api/auth/register',
					registerUser,
				),
				{
					loading: 'Creating your account...',
					success: (res) => {
						navigate('/login');
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
		<>
			<RegisterContainer>
				<SiteTitle to='/'>LinkMe</SiteTitle>
				<Title>Create your account</Title>
				<Subtitle>To get started, enter the required details below</Subtitle>

				<FormItemContainer>
					<FormItem>Username:</FormItem>
					<FormInput
						type='text'
						placeholder='Enter your username'
						name='username'
						value={registerUser.username}
						onChange={handleChange}
					/>
				</FormItemContainer>

				<FormItemContainer>
					<FormItem>Email:</FormItem>
					<FormInput
						type='email'
						placeholder='Enter your email'
						name='email'
						value={registerUser.email}
						onChange={handleChange}
					/>
				</FormItemContainer>

				<FormItemContainer>
					<FormItem>Password:</FormItem>
					<FormInput
						type='password'
						placeholder='Enter your password'
						name='password'
						value={registerUser.password}
						onChange={handleChange}
					/>
				</FormItemContainer>

				<ButtonContainer>
					<Button
						color={BUTTON_COLORS.blue}
						type={BUTTON_TYPES.medium}
						onClick={handleRegister}
					>
						Register
					</Button>
					<TextLink to='/login'>I already have an account</TextLink>
				</ButtonContainer>

				<ImageHolder src={RegisterImage} />
			</RegisterContainer>
		</>
	);
};

export default Register;
