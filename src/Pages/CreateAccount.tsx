import React, { useEffect } from 'react';
import CloseIcon from '../Icons/CloseIcon';
import Modal from '../UI/Modal';
import useForm from '../useForm/useFormHooks';

import { ROLE } from '../model/users-model';
import { useAppDispatch, useAppSelector } from '../reduxStore/app/hooks';
import { clearAuthError } from '../reduxStore/features/auth/authSlice';
import { CreateAccount } from '../reduxStore/features/auth/auth.actions';
import { Helmet } from 'react-helmet-async';

export default function Registration(): JSX.Element {
	const { error, status } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	// const [formState, setFormState] = useState<LoginData>({
	// 	email: '',
	// 	password:''
	// });
	const { values, handleInputChange } = useForm({
		name: '',
		email: '',
		password: '',
		role: ROLE.STUDENT,
	});
	// const {email,password} = formState
	const { name, email, password, role } = values;

	function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		dispatch(CreateAccount(values));
	}

	useEffect(() => {
		if (error) {
			dispatch(clearAuthError());
		}
	}, [dispatch, error]);
	return (
		<>
			<Modal>
				<Helmet>
					<title>Register | Hasob</title>
				</Helmet>
				<form onSubmit={onFormSubmit}>
					<div className="flex justify-end">
						<CloseIcon onClose={() => console.log('close')} />
					</div>
					<h1 className="text-4xl my-4 text-center text-blue-900  font-semibold">
						Welcome Back
					</h1>
					<p className="py-4 text-sm font-light">
						Learn on your own study coursework and handouts at your convenient
						time.
					</p>
					<div>
						<label className="block mt-4 mb-1 font-medium">Name</label>
						<input
							value={name}
							onChange={handleInputChange}
							name="name"
							type="text"
							className="w-full outline-none rounded-md py-2 px-1 bg-gray-200"
						/>
						{error && status === 'rejected' && (
							<p>The input is not valid E-mail!</p>
						)}
					</div>
					<div>
						<label className="block mt-4 mb-1 font-medium">Email</label>
						<input
							value={email}
							onChange={handleInputChange}
							name="email"
							type="email"
							className="w-full outline-none rounded-md py-2 px-1 bg-gray-200"
						/>
						{error && status === 'rejected' && (
							<p>The input is not valid E-mail!</p>
						)}
					</div>
					<div>
						<label className="block mt-4 mb-1 font-medium">Password</label>
						<input
							value={password}
							onChange={handleInputChange}
							name="password"
							type="password"
							className="w-full outline-none rounded-md py-2 px-1 bg-gray-200"
						/>
						<p className="font-light text-xs mt-2">
							Between 6 and 12 characters
						</p>
					</div>
					<div>
						<select name="role" value={role} onChange={handleInputChange}>
							<option value={ROLE.STUDENT}>Student</option>
							<option value={ROLE.TEACHER}>Teacher</option>
						</select>
					</div>
					<div className="my-12 text-center">
						<button
							className="bg-blue-900 text-white rounded-md py-2 px-5 w-full font-semibold text-2xl shadow-2xl"
							disabled={status === 'pending'}>
							Register
						</button>
					</div>
				</form>
			</Modal>
		</>
	);
}
