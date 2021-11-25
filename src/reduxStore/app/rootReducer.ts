import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/profile/profile.slice';

const rootReducer = combineReducers({
	auth: authReducer,
	profile: profileReducer,
});

export default rootReducer;

// import { configureStore } from '@reduxjs/toolkit';
// import { programApi } from './../../services/apiSlice';
// import { authApi } from '../features/auth/auth';
// import authReducer from '../features/auth/authSlice';

// export const store = configureStore({
// 	reducer: {
// 		[programApi.reducerPath]: programApi.reducer,
// 		[authApi.reducerPath]: authApi.reducer,
// 		auth:authReducer,
// 	},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(authApi.middleware),
// });

// export type AppDispatch = typeof store.dispatch;

// export type RootState = ReturnType<typeof store.getState>;
