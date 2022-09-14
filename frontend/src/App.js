import { useContext } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components
// Non protected routes - Basic
import LandingNavigation from './components/landing-navigation/LandingNavigation';
import Home from './routes/home/Home';
import Register from './routes/register/Register';
import Login from './routes/login/Login';

// Protected routes - Dashboard
import Dashboard from './components/dashboard/Dashboard';
import Links from './routes/links/Links';
import Themes from './routes/themes/Themes';
import Settings from './routes/settings/Settings';

// Protected routes - Account
import DashboardNavigation from './components/dashboard-navigation/DashboardNavigation';
import Account from './routes/account/Account';

// Non protected routes - User
import Display from './routes/display/Display';

// Data
import { UserContext } from './contexts/userContext';

// Route guard to check if user can access the route (is logged in)
const PrivateRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to='/login' />;
};

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<LandingNavigation />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute user={user} />}>
          <Route path='/dashboard/' element={<Dashboard />}>
            <Route path='/dashboard/links' element={<Links />} />
            <Route path='/dashboard/themes' element={<Themes />} />
            <Route path='/dashboard/settings' element={<Settings />} />
          </Route>
        </Route>

        <Route element={<PrivateRoute user={user} />}>
          <Route path='/account/' element={<DashboardNavigation type='account' />}>
            <Route path='/account/' element={<Account />} />
          </Route>
        </Route>

        <Route path='/:username' element={<Display />} />
      </Routes>

    </>
  );
}



export default App;
