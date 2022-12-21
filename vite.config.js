import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	root: path.resolve(__dirname, 'src'),
	plugins: [sveltekit()]
};

export default config;
