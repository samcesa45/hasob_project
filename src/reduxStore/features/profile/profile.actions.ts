import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../config';
import { User, Profile, CreateProfileData } from '../../../model/users-model';
import http from '../../../utils/http';

export const fetchProfile = createAsyncThunk(
	'profile/fetchProfile',
	async (id: string, thunkAPI) => {
		try {
			const url = `${config.endpoints.profile.fetchProfile}/${id}`;
			const { data } = await http.get<User>(url);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue('error fetching profile');
		}
	}
);

export const createProfile = createAsyncThunk(
	'profile/createProfile',
	async (values: CreateProfileData, thunkAPI) => {
		try {
			const url = config.endpoints.profile.createProfile;
			const {
				data: { profile },
			} = await http.post<{ profile: Profile }>(url, values);
			return profile;
		} catch (err) {
			return thunkAPI.rejectWithValue('error creating profile');
		}
	}
);
