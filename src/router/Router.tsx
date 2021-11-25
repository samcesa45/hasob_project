import React from 'react';
import * as routes from '../constants/routes';
import { ROLE } from '../model/users-model';
import { Routes, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';

import School from '../components/School';
import Home from '../components/Home';
import Login from '../Pages/Login';
import StudentDashboard from '../Pages/Student/DashBoard';
import Registration from '../Pages/CreateAccount';

export const Router = () => {
	const [modalIsSHown, setModalIsShown] = React.useState(false);

	function showmodalHandler() {
		setModalIsShown(true);
	}

	function hidemodalHandler() {
		setModalIsShown(false);
	}
	return (
		<Routes>
			<Route
				path={routes.HOME}
				element={
					<NonAuthRoute>
						<Home
							modalIsSHown={modalIsSHown}
							onShow={showmodalHandler}
							onHide={hidemodalHandler}
						/>
					</NonAuthRoute>
				}
			/>

			<Route
				path={routes.LOGIN}
				element={
					<NonAuthRoute>
						<Login />
					</NonAuthRoute>
				}
			/>
			<Route
				path={routes.CREATE_ACCOUNT}
				element={
					<NonAuthRoute>
						<Registration />
					</NonAuthRoute>
				}
			/>
			<Route
				path={routes.STUDENT_DASHBOARD}
				element={
					<AuthRoute roles={[ROLE.STUDENT]}>
						<School />
					</AuthRoute>
				}
			/>
			<Route
				path={routes.STUDENT_DASHBOARD}
				element={
					<AuthRoute roles={[ROLE.STUDENT]}>
						<StudentDashboard />
					</AuthRoute>
				}
			/>
			{/* <Route
				path={routes.USER_PROFILE}
				element={
					<AuthRoute roles={[ROLE.STUDENT, ROLE.TEACHER]}>
						<Profile />
					</AuthRoute>
				}
			/> */}
		</Routes>
	);
};
