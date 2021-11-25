import { useAppSelector } from '../reduxStore/app/hooks';
import { Navigate, useLocation } from 'react-router-dom';
import * as routes from '../constants/routes';
import { ROLE } from '../model/users-model';
import AccessDenied from '../Pages/AccessDenied';

interface Props {
	children: JSX.Element;
	roles: Array<ROLE>;
}

export default function AuthRoute({ children, roles }: Props) {
	let location = useLocation();

	const { isAuthenticated, user, status } = useAppSelector(
		(state) => state.auth
	);

	if (status === 'idle' || status === 'pending') return <div>....loading</div>;

	const userHasRequiredRole = user && roles.includes(user.role!) ? true : false;

	if (!isAuthenticated) {
		return <Navigate to={routes.LOGIN} state={{ from: location }} />;
	}

	if (isAuthenticated && !userHasRequiredRole) {
		return <AccessDenied />;
	}

	return children;
}
