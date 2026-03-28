// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Horizons Guides',
			favicon: '/favicon.ico',
			logo: {
				src: './public/favicon.png',
				alt: 'Horizons',
			},
			customCss: ['./src/styles/fonts.css', './src/styles/custom.css'],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
