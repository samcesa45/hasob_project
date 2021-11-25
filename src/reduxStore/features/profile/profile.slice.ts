import { createSlice } from '@reduxjs/toolkit';

import { ProfileState } from '../../../model/users-model';
import { createProfile, fetchProfile } from './profile.actions';

export const initialState = Object.freeze({
	status: 'idle',
	user: {},
	error: '',
}) as ProfileState;

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProfile.pending, (state) => {
			state.status = 'pending';
		});

		builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
			// state.user = payload;
			state.status = 'resolved';
		});

		builder.addCase(createProfile.pending, (state) => {
			state.status = 'pending';
		});

		builder.addCase(createProfile.fulfilled, (state, { payload }) => {
			state.status = 'rejected';
			state.error = payload as string;
		});
	},
});

export default profileSlice.reducer;
