import type { APIRoute } from 'astro';
import pdf from 'pdfjs';
import helvetica from 'pdfjs/font/Helvetica';

export const GET: APIRoute = async function GET() {
	try {
		const doc = new pdf.Document({ font: helvetica, padding: 10 });
		const text = doc.text({ fontSize: 12 });
		text.add('Example PDF');
		const buffer = await doc.asBuffer();

		return new Response(buffer.toString('binary'), {
			headers: {
				'Content-Type': 'application/pdf',
			},
		});
	} catch (error: unknown) {
		throw new Error(`Something went wrong in pdf-resource.pdf route!: ${error as string}`);
	}
};
