import { loadCurrentUser, CreateAccount, login, logout } from './auth.actions';
import { createSlice } from '@reduxjs/toolkit';
import { AuthState,User } from '../../../model/users-model';

export const initialState: AuthState = {
	isAuthenticated: false,
	error: '',
	status: 'idle',
	user:null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearAuthError: (state) => {
			state.error = '';
		},
	},

	extraReducers: (builder) => {
		builder.addCase(loadCurrentUser.pending, (state) => {
			state.status = 'pending';
		});

		//handles auth/loadCurrentUser
		builder.addCase(
			loadCurrentUser.fulfilled,
			(state, { payload: { user } }) => {
				state.isAuthenticated = true;
				state.status = 'resolved';
				state.user =user;
			}
		);

		builder.addCase(loadCurrentUser.rejected, (state) => {
			state.isAuthenticated = false;
			state.status = 'rejected';
		});

		builder.addCase(CreateAccount.pending, (state) => {
			state.status = 'pending';
		});

		builder.addCase(CreateAccount.fulfilled, (state, { payload: { user } }) => {
			state.isAuthenticated = true;
			state.status = 'resolved';
			state.user = user;
		});

		builder.addCase(CreateAccount.rejected, (state, { payload }) => {
			state.error = payload as string;
			state.isAuthenticated = false;
			state.status = 'rejected';
		});

		builder.addCase(login.pending, (state) => {
			state.status = 'pending';
		});

		builder.addCase(login.fulfilled, (state, { payload: { user} }) => {
			state.isAuthenticated = true;
			state.status = 'resolved';
			state.user = user;
		});

		builder.addCase(login.rejected, (state, { payload }) => {
			state.error = payload as string;
			state.isAuthenticated = false;
			state.status = 'rejected';
		});

		builder.addCase(logout.pending, (state) => {
			state.status = 'pending';
		});

		builder.addCase(logout.fulfilled, (state) => {
			state.isAuthenticated = false;
			state.status = 'resolved';
			// state.user = {};
		});

		builder.addCase(logout.rejected, (state) => {
			state.isAuthenticated = false;
			state.status = 'rejected';
			// state.user = {};
		});
	},
});

//actions from createSlice
export const { clearAuthError } = authSlice.actions;

//the reducer

export default authSlice.reducer;

// import { User, AuthState, UserResponse } from './../../../model/users-model';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../app/store';
// import { authApi } from './auth';

// type AuthState = {
// 	user: User | null;
// 	token: string | null;
// 	isAuthenticated: boolean;
// };
// const authSlice = createSlice({
// 	name: 'auth',
// 	initialState: {
// 		user: null,
// 		token: null,
// 		isAuthenticated: false,
// 	} as AuthState,
// 	reducers: {
// 		setCredentials: (
// 			state,
// 			{ payload: { user, token } }: PayloadAction<AuthState>
// 		) => {
// 			state.user = user;
// 			state.token = token;
// 			state.isAuthenticated = true;
// 		},

// 		logout: (state) => {
// 			state.user = null;
// 			state.token = null;
// 			state.isAuthenticated = false;
// 		},
// 	},
// 	extraReducers: (builder) => {
// 		builder.addMatcher(
// 			authApi.endpoints.login.matchFulfilled,
// 			(state, { payload: { user, token } }) => {
// 				state.user = user;
// 				state.token = token;
// 				state.isAuthenticated = true;
// 			}
// 		);
// 	},
// });

// export const { logout, setCredentials } = authSlice.actions;
// export default authSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;
// export const selectIsAuthenticated = (state: RootState) =>
// 	state.auth.isAuthenticated;
