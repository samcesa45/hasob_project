import { useAppSelector } from '../reduxStore/app/hooks';
import { Navigate, useLocation } from 'react-router-dom';
import * as routes from '../constants/routes';
import { ROLE } from '../model/users-model';

interface Props {
	children: JSX.Element;
}

export default function NonAuthRoute({ children }: Props) {
	const location = useLocation();

	const { isAuthenticated, user } = useAppSelector((state) => state.auth);

	const dashboard =
		user?.role === ROLE.STUDENT
			? routes.STUDENT_DASHBOARD
			: routes.TEACHER_DASHBOARD;

	if (isAuthenticated) {
		return <Navigate to={dashboard} state={{ from: location }} />;
	}

	return children;
}
