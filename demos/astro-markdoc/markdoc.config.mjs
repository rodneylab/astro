import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
	// extends: [
	// 	shiki({
	// 		theme: 'one-dark-pro',
	// 	}),
	// ],
	nodes: {
		fence: {
			render: component('./src/components/Fence.astro'),
			attributes: {
				content: { type: String },
				language: {
					type: String,
				},
			},
		},
	},
});
