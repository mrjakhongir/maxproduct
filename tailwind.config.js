/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				wrapFromBottom: {
					'0%': {
						transform: 'translateX(0)',
						opacity: '1',
						height: 'auto',
						marginBottom: '20px',
					},
					'100%': {
						transform: 'translateX(-100%)',
						opacity: '0',
						height: '0',
						marginBottom: '0',
					},
				},
			},
			animation: {
				wrapFromBottom: 'wrapFromBottom 0.6s ease forwards',
			},
			screens: {
				xs: '475px',
				'2xl': '1440px',
				'3xl': '1600px',
			},
		},
	},
	plugins: [],
};
