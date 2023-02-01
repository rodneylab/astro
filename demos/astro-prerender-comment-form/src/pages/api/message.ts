import type { APIRoute } from 'astro';

const siteUrl = import.meta.env.PUBLIC_SITE_URL;
const turnstileSecret = import.meta.env.TURNSTILE_SECRETKEY;

export const post: APIRoute = async function post({ redirect, request }) {
	try {
		const form = await request.formData();
		const name = form.get('name');
		const email = form.get('email');
		const comment = form.get('comment');
		const turnstileResponse = form.get('cf-turnstile-response');

		const ip = request.headers.get('CF-Connecting-IP');

		if (typeof turnstileResponse === 'string') {
			const bodyFormData = new FormData();
			bodyFormData.append('secret', turnstileSecret);
			bodyFormData.append('response', turnstileResponse);
			ip && bodyFormData.append('remoteip', ip);
			const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
				method: 'POST',
				body: bodyFormData,
			});
			const { success } = await response.json();

			console.log({ name, email, comment, success });
		}

		return redirect(`${siteUrl}/thanks`);
	} catch (error: unknown) {
		console.error(`Error in comment form submission: ${error as string}`);
		return redirect(`${siteUrl}/`);
	}
};
