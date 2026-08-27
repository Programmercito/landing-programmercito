/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			primary: {
				100: 'rgb(var(--c-primary-100) / <alpha-value>)',
				200: 'rgb(var(--c-primary-200) / <alpha-value>)',
				300: 'rgb(var(--c-primary-300) / <alpha-value>)',
			},
			accent: {
				100: 'rgb(var(--c-accent-100) / <alpha-value>)',
				200: 'rgb(var(--c-accent-200) / <alpha-value>)',
			},
			text: {
				100: 'rgb(var(--c-text-100) / <alpha-value>)',
				200: 'rgb(var(--c-text-200) / <alpha-value>)',
			},
			bg: {
				100: 'rgb(var(--c-bg-100) / <alpha-value>)',
				200: 'rgb(var(--c-bg-200) / <alpha-value>)',
				300: 'rgb(var(--c-bg-300) / <alpha-value>)'
			},
		},
		screens: {
			sm: '640px',
			md: '950px',
			lg: '1280px',
		},
	},
	plugins: [],
}
