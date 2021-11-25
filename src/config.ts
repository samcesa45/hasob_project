const config = {
	env: process.env.NODE_ENV,
	baseURL: '/',
	endpoints: {
		auth: {
			login: '/login',
			createAccount: '/register-student',
			logout: '/logout',
			me: '/user',
			profile: '/users/profile',
		},
		users: {
			students: '/users/students',
		},
		profile: {
			fetchProfile: '/users',
			createProfile: '/users/create-profile',
		},
	},
};

export default config;
