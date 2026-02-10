// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://f4-shape-up.vercel.app',
	legacy: {
		collections: false,
	},
	integrations: [
		starlight({
			title: 'f4-shape-up',
			description: 'Diataxis-based Shape Up documentation.',
			sidebar: [
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'How-To Guides',
					autogenerate: { directory: 'how-to' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Explanation',
					autogenerate: { directory: 'explanation' },
				},
			],
		}),
	],
});
