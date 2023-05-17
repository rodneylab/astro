import { createFontStack } from '@capsizecss/core';
import arial from '@capsizecss/metrics/arial';
import openSans from '@capsizecss/metrics/openSans';
import roboto from '@capsizecss/metrics/roboto';
import kebabCase from 'just-kebab-case';
import { writeFileSync } from 'node:fs';
import path from 'node:path';

const __dirname = path.resolve();
const outputPath = path.join(__dirname, 'src/styles/font-fallbacks.css');

const { fontFaces, fontFamily } = createFontStack([openSans, arial, roboto], {
	fontFaceFormat: 'styleObject',
});

const css = `/* This file is generated using capsize. Run \`vite-node capsize-font-fallbacks.ts\` to refresh. */

:root {
  --font-family: ${fontFamily}, sans-serif;
}
${fontFaces
	.map(
		(element) => `
@font-face {
  font-family: '${element['@font-face'].fontFamily}';
${Object.entries(element['@font-face'])
	.filter(([key]) => key !== 'fontFamily')
	.map(([key, value]) => `  ${kebabCase(key)}: ${value}`)
	.join(';\n')}
}`,
	)
	.join('\n')}
`;

writeFileSync(outputPath, css);
