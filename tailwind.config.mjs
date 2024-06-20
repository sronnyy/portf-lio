/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
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
				cor: 'CormorantGaramond',
				poppins: 'Poppins',
			},
			colors: {
				section: '#f8fcff',
				orange: '#FF3D0C',
				offwhite: '#F7F7F7',
				offblack: '#4A4A4A',
        		primary: '#040404',
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
			}
		  })
		},
	],
}
