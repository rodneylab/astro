import type { MiddlewareHandler } from 'astro';
import { pack } from 'msgpackr';

const logtailSourceToken = import.meta.env.LOGTAIL_SOURCE_TOKEN;

export const onRequest: MiddlewareHandler<Response> = async function onRequest(
	{ locals, request },
	next,
) {
	const { url } = request;
	const { pathname } = new URL(url);
	const timestamp = new Date().toISOString();

	(locals as { timestamp: string }).timestamp = timestamp;

	const logData = {
		dt: timestamp,
		level: 'info',
		message: 'astro-middleware-log',
		item: {
			pathname,
		},
	};

	await fetch('https://in.logtail.com', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${logtailSourceToken}`,
			'Content-Type': 'application/msgpack',
		},
		body: pack(logData),
	});

	const response = await next();

	return response;
};
