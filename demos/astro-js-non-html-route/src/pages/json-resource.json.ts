import type { APIRoute } from 'astro';

export const get: APIRoute = async function get() {
	try {
		const astroResources = [
			{ name: 'docs', url: 'https://docs.astro.build/en/getting-started/' },
			{ name: 'discord', url: 'https://docs.astro.build/chat' },
		];

		return { body: JSON.stringify(astroResources) };
	} catch (error) {
		throw new Error('Something went wrong in json-resource.json route!');
	}
};
