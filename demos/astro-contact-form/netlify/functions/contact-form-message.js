import axios from 'axios';

const { TELEGRAM_BOT_API_TOKEN, TELEGRAM_BOT_CHAT_ID } = process.env;

async function notifyViaTelegramBot({ honeyBotFlaggedSpam, name, email, message }) {
	try {
		const data = JSON.stringify(
			{
				honeyBotFlaggedSpam,
				name,
				email,
				message,
			},
			null,
			2,
		);
		const text = `Contact form message: ${data}`;
		await axios({
			url: `https://api.telegram.org/bot${TELEGRAM_BOT_API_TOKEN}/sendMessage`,
			method: 'POST',
			data: {
				chat_id: TELEGRAM_BOT_CHAT_ID,
				text,
			},
		});
		return { successful: true };
	} catch (error) {
		let message;
		if (error.response) {
			message = `Telegram server responded with non 2xx code: ${error.response.data}`;
		} else if (error.request) {
			message = `No Telegram response received: ${error.request}`;
		} else {
			message = `Error setting up telegram response: ${error.message}`;
		}
		return { successful: false, error: message };
	}
}

export async function handler({ body, httpMethod }) {
	try {
		if (httpMethod !== 'POST') {
			return {
				statusCode: 405,
				body: 'Method Not Allowed',
			};
		}

		const data = JSON.parse(body);
		const { botField, email, name, message } = data;

		const { error: telegramError } = await notifyViaTelegramBot({
			honeyBotFlaggedSpam: botField !== '',
			email,
			name,
			message,
		});

		if (telegramError) {
			return {
				statusCode: 400,
				body: telegramError,
			};
		}

		return { statusCode: 200, body: 'Over and out.' };
	} catch (error) {
		return {
			statusCode: 400,
			body: `Handler error: ${error}`,
		};
	}
}

export default handler;
