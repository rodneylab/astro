import type { APIRoute } from 'astro';

export const GET: APIRoute = async function GET() {
	try {
		const astroResources = [
			{ name: 'docs', url: 'https://docs.astro.build/en/getting-started/' },
			{ name: 'discord', url: 'https://docs.astro.build/chat' },
		];

		return new Response(JSON.stringify(astroResources), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		throw new Error('Something went wrong in json-resource.json route!');
	}
};
