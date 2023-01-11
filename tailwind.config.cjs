/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'titillium': ['Titillium Web', 'sans-serif'],
				'inter': ['Inter', 'sans-serif']
			},
			colors: {
				'primary': '#b92851'
			}
		},
	},
	plugins: [],
}
