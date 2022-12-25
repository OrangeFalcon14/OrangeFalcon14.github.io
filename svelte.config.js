import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "dist",
			assets: "dist",
		}),
		paths: {
			base: ""
		}
	}
};

export default config;
