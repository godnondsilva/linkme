import { useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Components
import Button, {
	BUTTON_COLORS,
	BUTTON_TYPES,
} from '../../components/button/Button';

// Data
import { UserContext } from '../../contexts/userContext';
import { validateLogin } from '../../utils/validation/login';
import { validateEmail } from '../../utils/validation/email';
import { LinksContext } from '../../contexts/linksContext';

// Images
import LoginImage from '../../assets/auth-image.png';

// Styles
import {
	LoginContainer,
	SiteTitle,
	ImageHolder,
	Title,
	Subtitle,
	FormItem,
	FormInput,
	FormItemContainer,
	ButtonContainer,
	TextLink,
} from './Login.styles';

const Login = () => {
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);
	const { setLinks } = useContext(LinksContext);
	const [loginUser, setLoginUser] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginUser({ ...loginUser, [name]: value });
	};

	const handleLogin = () => {
		if (!validateLogin(loginUser.email, loginUser.password))
			return toast.error('Please fill in all the fields');
		if (!validateEmail(loginUser.email))
			return toast.error('Please enter a valid email');
		if (user) {
			navigate('/dashboard/links');
			toast.error('You are already logged in. Navigating you to the dashboard');
			return;
		}
		try {
			toast.promise(
				axios.post(
					process.env.REACT_APP_BACKEND_URL + '/api/auth/login',
					loginUser,
				),
				{
					loading: 'Logging in to your account...',
					success: (res) => {
						setUser({
							...res.data.payload,
							image_url:
								process.env.REACT_APP_BACKEND_URL +
								`/api/image/${res.data.payload.image_url}`,
						});
						navigate('/dashboard/links');
						axios
							.get(
								process.env.REACT_APP_BACKEND_URL +
									`/api/links/${res.data.payload.username}`,
							)
							.then((res) => {
								setLinks(res.data.payload);
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

	return (
		<>
			<LoginContainer>
				<SiteTitle to='/'>LinkMe</SiteTitle>
				<Title>Login to your account</Title>
				<Subtitle>Enter your details to continue where you left</Subtitle>

				<FormItemContainer>
					<FormItem>Email:</FormItem>
					<FormInput
						type='email'
						placeholder='Enter your email'
						name='email'
						value={loginUser.email}
						onChange={handleChange}
					/>
				</FormItemContainer>

				<FormItemContainer>
					<FormItem>Password:</FormItem>
					<FormInput
						type='password'
						placeholder='Enter your password'
						name='password'
						value={loginUser.password}
						onChange={handleChange}
					/>
				</FormItemContainer>

				<ButtonContainer>
					<Button
						color={BUTTON_COLORS.blue}
						type={BUTTON_TYPES.medium}
						onClick={handleLogin}
					>
						Login
					</Button>
					<TextLink to='/register'>I do not have an account</TextLink>
				</ButtonContainer>

				<ImageHolder src={LoginImage} />
			</LoginContainer>
		</>
	);
};

export default Login;
