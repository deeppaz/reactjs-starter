import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({
  isAllowed,
  redirectTo = '/login',
  children,
}) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children || <Outlet />;
}

PrivateRoute.propTypes = {
  isAllowed: PropTypes.any,
  redirectTo: PropTypes.any,
  children: PropTypes.any,
};
