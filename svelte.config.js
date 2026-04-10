import { mdsvex } from 'mdsvex';

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
	extensions: ['.svelte', '.svx', '.md']
};
