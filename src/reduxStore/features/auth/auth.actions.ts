import {
	LoginData,
	CreateAccountData,
	Profile,
	User,
} from './../../../model/users-model';

import { createAsyncThunk } from '@reduxjs/toolkit';

import config from '../../../config';

import http from '../../../utils/http';

export const loadCurrentUser = createAsyncThunk(
	'auth/loadCurrentUser',
	async (_, thunkAPI) => {
		try {
			const url = config.endpoints.auth.me;
			const {
				data: { user },
			} = await http.get<{ user: User }>(url);
			return user;
		} catch (err) {
			return thunkAPI.rejectWithValue('err.response.data.message');
		}
	}
);

export const loadCurrentUserProfile = createAsyncThunk(
	'auth/loadCurrentUserProfile',
	async (_, thunkAPI) => {
		try {
			const url = config.endpoints.auth.profile;
			const { data } = await http.get<Profile>(url);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue('err.response.data.message');
		}
	}
);

export const CreateAccount = createAsyncThunk(
	'auth/CreateAccount',
	async ({ name, email, password, role }: CreateAccountData, thunkAPI) => {
		try {
			const url = config.endpoints.auth.createAccount;
			const {
				data: { user },
			} = await http.post<{ user: User }>(url, { name, email, password, role });
			return user;
		} catch (err) {
			return thunkAPI.rejectWithValue('err.response.data.message');
		}
	}
);
export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }: LoginData, thunkAPI) => {
		try {
			const url = config.endpoints.auth.login;
			const {
				data: { user },
			} = await http.post<{ user: User }>(url, { email, password });
			return user;
		} catch (err) {
			return thunkAPI.rejectWithValue('err.response.data.message');
		}
	}
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		const url = config.endpoints.auth.logout;
		await http.post(url);
	} catch (err) {
		return thunkAPI.rejectWithValue('Error in logout');
	}
});

// import { UserResponse, LoginRequest } from '../../../model/users-model';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
// import { RootState } from '../../app/store';

// export const authApi = createApi({
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: '/',
// 		prepareHeaders: (headers, { getState }) => {
// 			// By default, if we have a token in the store, let's use that for authenticated requests
// 			const token = (getState() as RootState).auth.token;
// 			if (token) {
// 				headers.set('authorization', `Bearer ${token}`);
// 			}
// 			return headers;
// 		},
// 	}),
// 	endpoints: (builder) => ({
// 		login: builder.mutation<UserResponse, LoginRequest>({
// 			query: (credentials) => ({
// 				url: 'login',
// 				method: 'POST',
// 				mode: 'no-cors',
// 				body: credentials,
// 			}),
// 			transformResponse: (response: { data: UserResponse }) => {
// 				return response.data;
// 			},
// 		}),
// 		protected: builder.mutation<{ message: string }, void>({
// 			query: () => 'protected',
// 		}),
// 	}),
// });

// export const { useLoginMutation, useProtectedMutation } = authApi;
