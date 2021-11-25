import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from '../reduxStore/app';

export enum ROLE {
	STUDENT = 'Student',
	TEACHER = 'Teacher',
}

export interface CreateAccountData {
	name: string;
	email: string;
	password: string;
	role: ROLE;
}
export interface User {
	id?: string;
	name?: string;
	email: string;
	avatar?: string;
	password: string;
	role?: ROLE;
	profile?: Profile;
}

// export interface UserResponse {
// 	user: User;
// 	token: string;
// }

export interface LoginData {
	email: string;
	password: string;
}
export interface Profile {
	id: string;
	title: string;
	description: string;
	userId: string;
}

export interface CreateProfileData extends Omit<Profile, 'id' | 'userId'> {}

type Status = 'idle' | 'pending' | 'resolved' | 'rejected';
export interface AuthState {
	status: Status;
	isAuthenticated: boolean;
	error: string;
	user: User;
}

export interface ErrorState {
	message: string | null;
}

export interface ProfileState {
	status: Status;
	user: User;
	error: string;
}

//==============================================================================
// Redux Utilities data types
//==============================================================================

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
