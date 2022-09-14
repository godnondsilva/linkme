import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

// Components
import Button, {
	BUTTON_COLORS,
	BUTTON_TYPES,
} from '../../components/button/Button';

// Data
import { UserContext } from '../../contexts/userContext';
import { refreshPreview } from '../../utils/helpers';

// Styles
import {
	Title,
	Subheading,
	ProfileContainer,
	FlexContainer,
	InnerFlexContainer,
	ProfileImage,
	DisplayUsernameInput,
	ProfileDescTextarea,
	UploadButton,
	SettingsContainer,
} from './Settings.styles';

const Settings = () => {
	const { user, setUser } = useContext(UserContext);
	const [image, setImage] = useState(
		user.image_url ? user.image_url : ProfileImage,
	);

	useEffect(() => {
		setImage(user.image_url);
	}, [user.image_url]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSave = () => {
		try {
			toast.promise(
				axios.put(
					process.env.REACT_APP_BACKEND_URL + `/api/profile/${user.uid}/update`,
					{
						display_name: user.display_name,
						description: user.description,
					},
				),
				{
					loading: 'Uploading your image...',
					success: (res) => {
						refreshPreview();
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

	const uploadImage = (e) => {
		if (!e.target.files[0]) return;
		try {
			const file = e.target.files[0];
			const formData = new FormData();
			formData.append('img', file);
			formData.append('old_img', user.image_url);
			toast.promise(
				axios.post(
					process.env.REACT_APP_BACKEND_URL + `/api/image/${user.uid}/update`,
					formData,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					},
				),
				{
					loading: 'Deleting your image...',
					success: (res) => {
						setUser({
							...user,
							image_url:
								process.env.REACT_APP_BACKEND_URL +
								`/api/image/${e.target.files[0].name}`,
						});
						refreshPreview();
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

	const deleteImage = () => {
		try {
			toast.promise(
				axios.post(
					process.env.REACT_APP_BACKEND_URL + `/api/image/${user.uid}/delete`,
					{
						image_url: user.image_url,
					},
				),
				{
					loading: 'Deleting your image...',
					success: (res) => {
						setUser({
							...user,
							image_url:
								process.env.REACT_APP_BACKEND_URL + `/api/image/user.png`,
						});
						refreshPreview();
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

	const openFileDialog = () => {
		document.getElementById('file').click();
	};

	return (
		<SettingsContainer>
			<Title>Settings</Title>
			<Subheading>My Profile</Subheading>
			<ProfileContainer>
				<FlexContainer>
					<ProfileImage src={image} />
					<InnerFlexContainer>
						<Button
							type={BUTTON_TYPES.small}
							color={BUTTON_COLORS.blue}
							onClick={openFileDialog}
						>
							Upload An Image
						</Button>
						<UploadButton id='file' type='file' onChange={uploadImage} />
						<Button
							type={BUTTON_TYPES.small}
							color={BUTTON_COLORS.red}
							onClick={deleteImage}
						>
							Remove
						</Button>
					</InnerFlexContainer>
				</FlexContainer>
				<InnerFlexContainer>
					<DisplayUsernameInput
						type='text'
						placeholder='Display @username'
						name='display_name'
						value={user.display_name}
						onChange={handleChange}
					/>
					<ProfileDescTextarea
						type='text'
						placeholder='Profile bio'
						name='description'
						value={user.description}
						onChange={handleChange}
					/>
					<Button
						onClick={handleSave}
						type={BUTTON_TYPES.small}
						color={BUTTON_COLORS.blue}
					>
						Save Changes
					</Button>
				</InnerFlexContainer>
			</ProfileContainer>
		</SettingsContainer>
	);
};

export default Settings;
