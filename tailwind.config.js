module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				120: '30rem',
				160: '65vh',
				170: '30%',
				180: '12vh',
			},
			fontFamily: {
				body: ['Poppins'],
				table: ['Nunito'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
