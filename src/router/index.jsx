import Dashboard from '../pages/dashboard/Dashboard';
import DeviceReports from '../pages/deviceReports/DeviceReports';
import DeviceSettings from '../pages/deviceSettings/DeviceSettings';
import Login from '../pages/login/Login';
import UserSettings from '../pages/userSettings/UserSettings';

const routes = [
  {
    path: '/',
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: '/deviceSettings',
    component: DeviceSettings,
    isPrivate: true,
  },
  {
    path: '/deviceReports',
    component: DeviceReports,
    isPrivate: true,
  },
  {
    path: '/userSettings',
    component: UserSettings,
    isPrivate: true,
  },
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
];

export default routes;
