import { store } from '../reduxStore/app';
import * as status from '../constants/http-status';
import Axios from 'axios';
import config from '../config';
import { logout } from '../reduxStore/features/auth/auth.actions';

const http = Axios.create({
	baseURL: config.baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});

http.interceptors.response.use(
	(res) => res,
	(err) => {
		if (err.response.data.status === status.UNAUTHORIZED) {
			store.dispatch(logout());
		}
		return Promise.reject(err);
	}
);

export default http;
