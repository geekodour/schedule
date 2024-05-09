import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		// see https://docs.netlify.com/routing/redirects/redirect-options/#custom-404-page-handling
		adapter: adapter({
			// NOTE: fallback is mandatory when using static-adapter and we have a
			// 		 dynamic page. The value depends on how you're serving the
			// 		 spa, basically it should be the page where the deployment
			// 		 vendor fallsback to if it finds no matching url
			fallback: '404.html' // for netlify
		}),
		alias: {
			'@/*': './src/lib/*'
		}
	}
};

export default config;
