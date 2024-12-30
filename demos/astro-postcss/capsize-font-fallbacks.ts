import { createFontStack } from "@capsizecss/core";
import arial from "@capsizecss/metrics/arial";
import openSans from "@capsizecss/metrics/openSans";
import roboto from "@capsizecss/metrics/roboto";
import { writeFileSync } from "node:fs";
import path from "node:path";

const __dirname = path.resolve();
const outputPath = path.join(__dirname, "src/styles/font-fallbacks.css");

const { fontFaces, fontFamily } = createFontStack([openSans, arial, roboto]);

const css = `/* This file is generated using capsize. Run \`pnpm vite-node capsize-font-fallbacks.ts\` to refresh. */

:root {
  --font-family: ${fontFamily}, sans-serif;
}

${fontFaces}`;

writeFileSync(outputPath, css);
