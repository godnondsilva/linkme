import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

// Data
import { LinksContext } from '../../contexts/linksContext';
import { refreshPreview } from '../../utils/helpers';
import { UserContext } from '../../contexts/userContext';

// Images
import DeleteButton from '../../assets/delete-btn.png';
import SaveButton from '../../assets/save-btn.png';

// Styles
import {
	LinkContainer,
	LinkInnerContainer,
	LinkOptionsContainer,
	LinkInput,
	Switch,
	Input,
	Slider,
	FlexContainer,
	Delete,
	Save,
} from './LinkItem.styles';

const initialState = {
	title: '',
	url: '',
	visible: false,
};

const LinkItem = ({ link }) => {
	const [linkState, setLinkState] = useState(initialState);
	const [disabled, setDisabled] = useState(false);

	const { links, setLinks } = useContext(LinksContext);
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (link) {
			setLinkState(link);
		}
	}, [link]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLinkState({ ...linkState, [name]: value });
	};

	const handleVisibility = () => {
		try {
			toast.promise(
				axios.put(
					process.env.REACT_APP_BACKEND_URL +
						`/api/link/${linkState.lid}/update`,
					{
						visible: !linkState.visible,
					},
				),
				{
					loading: 'Changing link visibility...',
					success: (res) => {
						refreshPreview();
						axios
							.get(
								process.env.REACT_APP_BACKEND_URL +
									`/api/links/${user.username}`,
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

	const handleDelete = () => {
		if (disabled) return toast.error('Please wait till the link is deleted.');
		try {
			setDisabled(true);
			toast.promise(
				axios.delete(
					process.env.REACT_APP_BACKEND_URL +
						`/api/link/${linkState.lid}/delete`,
				),
				{
					loading: 'Deleting your link...',
					success: (res) => {
						setLinks(links.filter((link) => link.lid !== linkState.lid));
						refreshPreview();
						setDisabled(false);
						return res.data.message;
					},
					error: (err) => {
						setDisabled(false);
						return err.response.data.message;
					},
				},
			);
		} catch {
			toast.error('Something went wrong.');
		}
	};

	const handleSave = () => {
		try {
			toast.promise(
				axios.put(
					process.env.REACT_APP_BACKEND_URL +
						`/api/link/${linkState.lid}/update`,
					linkState,
				),
				{
					loading: 'Saving your link...',
					success: (res) => {
						setLinks(
							links.map((link) =>
								link.lid === linkState.lid ? linkState : link,
							),
						);
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

	return (
		<>
			<LinkContainer>
				<LinkInnerContainer>
					<LinkInput
						type='text'
						placeholder='Enter a link title'
						name='title'
						value={linkState.title}
						onChange={handleChange}
					/>

					<LinkInput
						type='text'
						placeholder='Enter a link URL'
						name='url'
						value={linkState.url}
						onChange={handleChange}
					/>
				</LinkInnerContainer>
				<LinkOptionsContainer>
					<Switch>
						<Input
							type='checkbox'
							value={linkState.visible}
							checked={linkState.visible}
							onChange={handleVisibility}
						/>
						<Slider></Slider>
					</Switch>
					<FlexContainer>
						<Delete src={DeleteButton} onClick={handleDelete} />
						<Save src={SaveButton} onClick={handleSave} />
					</FlexContainer>
				</LinkOptionsContainer>
			</LinkContainer>
		</>
	);
};

export default LinkItem;
