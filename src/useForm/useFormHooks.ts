import { useState } from 'react';
import { ROLE, CreateAccountData } from '../model/users-model';

const useForm = (initialState: CreateAccountData) => {
	const [values, setValues] = useState<CreateAccountData>(initialState);

	const handleInputChange = ({ target }: any) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return { values, handleInputChange };
};

export default useForm;
