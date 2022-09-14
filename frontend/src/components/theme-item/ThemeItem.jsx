import { useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

// Data
import { ThemesContext } from '../../contexts/themesContext';
import { UserContext } from '../../contexts/userContext';
import { refreshPreview } from '../../utils/helpers';

// Styles
import {
	ThemeOuterContainer,
	ThemeCardContainer,
	Card,
} from './ThemeItem.styles';

const ThemeCard = ({ theme }) => {
	const { user, setUser } = useContext(UserContext);
	const { themes, setThemes } = useContext(ThemesContext);

	const handleUpdate = () => {
		try {
			toast.promise(
				axios.put(
					process.env.REACT_APP_BACKEND_URL + `/api/theme/${user.uid}/update`,
					{
						theme: theme.index,
					},
				),
				{
					loading: 'Updating theme...',
					success: (res) => {
						setUser({ ...user, theme: theme.index });
						setThemes(
							themes.map((theme) => {
								if (theme.index === user.theme) {
									return { ...theme, isCurrentTheme: true };
								} else {
									return { ...theme, isCurrentTheme: false };
								}
							}),
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
		<ThemeOuterContainer>
			<ThemeCardContainer
				onClick={handleUpdate}
				theme={theme}
				isCurrentTheme={theme.isCurrentTheme}
			>
				<Card theme={theme} />
				<Card theme={theme} />
				<Card theme={theme} />
			</ThemeCardContainer>
			{theme.title}
		</ThemeOuterContainer>
	);
};

export default ThemeCard;
