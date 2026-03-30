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
			social: [
					{ icon: 'github', label: 'GitHub', href: 'https://github.com/vivithequeen/horizons-guides' },
				],
			customCss: ['./src/styles/fonts.css', './src/styles/custom.css'],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ slug: 'guides/git-guide' },
						{ slug: 'guides/website-guide' },
						{ slug: 'guides/godot-guide' },
						{ slug: 'guides/more-resources' },
					],
				},
			],
		}),
	],
});
