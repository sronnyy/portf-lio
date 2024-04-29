/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/flowbite/**/*.js"
 		],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					sm: '1rem',
					md: '0'
				},
			},
			fontFamily: {	
				poppins: 'Poppins',
				albert: 'Albert Sans',
				roboto: 'Roboto',
			},
			colors: {
				primary: '#0C0C0C',
				second: '#EB3850',
				shape: '#3333',
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '90%',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1024px',
					},
					'@screen xl': {
						maxWidth: '1280px',
					},
				},

				'.card': {
					borderTopRightRadius: '12px',
					borderBottomLeftRadius: '12px',
					
				},

			});
		},

	],
};

