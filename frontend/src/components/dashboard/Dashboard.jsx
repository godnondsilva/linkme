import { Outlet } from 'react-router-dom';

// Components
import DashboardNavigation from '../dashboard-navigation/DashboardNavigation';
import Preview from '../preview/Preview';

// Styles
import DashboardStyle from '../../dashboardStyles';
import { InnerMainContainer, MainContainer } from './Dashboard.styles';

const Dashboard = () => {
	return (
		<>
			<DashboardStyle />
			<DashboardNavigation type='dashboard' />
			<MainContainer>
				<InnerMainContainer>
					<Outlet />
				</InnerMainContainer>
				<Preview />
			</MainContainer>
		</>
	);
};

export default Dashboard;
