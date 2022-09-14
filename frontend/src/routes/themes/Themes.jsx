import { useContext, useEffect } from 'react';

// Components
import ThemeItem from '../../components/theme-item/ThemeItem';

// Styles
import { ThemesContext } from '../../contexts/themesContext';
import { UserContext } from '../../contexts/userContext';
import { USER_THEMES } from '../../data/userThemes';

// Styles
import {
	FlexContainer,
	ThemesTitle,
	ThemesList,
	ThemesContainer,
} from './Themes.styles';

const Themes = () => {
	const { themes, setThemes } = useContext(ThemesContext);
	const { user } = useContext(UserContext);
	useEffect(() => {
		setThemes(
			Object.values(USER_THEMES).map((theme) => {
				if (theme.index === user.theme) {
					return { ...theme, isCurrentTheme: true };
				} else {
					return { ...theme, isCurrentTheme: false };
				}
			}),
		);
	}, [setThemes, user.theme]);
	return (
		<ThemesContainer>
			<FlexContainer>
				<ThemesTitle>My Themes</ThemesTitle>
			</FlexContainer>
			<ThemesList>
				{themes.map((theme, idx) => (
					<ThemeItem key={idx} theme={theme} />
				))}
			</ThemesList>
		</ThemesContainer>
	);
};

export default Themes;
