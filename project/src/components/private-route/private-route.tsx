import { AppRoute, AuthorizationStatus } from '../../constants';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

export default function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}
