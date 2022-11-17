import { createTheme, createThemeContract } from '@vanilla-extract/css';

const fallbackSansFonts =
	"Montserrat, system-ui, '-apple-system', BlinkMacSystemFont, Segoe UI, Roboto, 'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji', Segoe UI Emoji, 'Segoe UI Symbol', 'Noto Color Emoji'";

const colours = {
	webOrange: 'hsl(39 100% 50%)',

	azureRadiance: 'hsl(202 100% 50%)',

	astronaut: 'hsl(240 46% 31%)',

	shark: 'hsl(216 7% 15%)',
	sharkTint10: 'hsl(216 4% 23%)',
	sharkShadow: '216 7% 11%',

	solitude: 'hsl(206 100% 96%)',
	solitudeTint70: 'hsl(206 100% 99%)',
	solitudeShade10: 'hsl(208 28% 86%)',
	solitudeShadow: '209 25% 60%',
};

const commonVars = {
	fontFamily: {
		heading: `'Work Sans', ${fallbackSansFonts}`,
		subheading: `'Roboto Slab', ${fallbackSansFonts}`,
		body: `'Source Sans Pro', ${fallbackSansFonts}`,
	},
	widths: {
		maxWidthText: '38rem',
		maxWidth3XL: '48rem',
	},
	spacing: {
		px: '1px',
		size0: '0',
		size1: '0.25rem',
		size2: '0.5rem',
		size4: '1rem',
		size6: '1.5rem',
		size8: '2rem',
		size10: '2.5rem',
		size12: '3rem',
	},
	fontSize: {
		size1: '1rem',
		size2: '1.25rem',
		size3: '1.563rem',
		size4: '1.953rem',
	},
	fontWeight: {
		normal: '400',
		bold: '700',
	},
	lineHeight: {
		normal: '1.5',
		relaxed: '1.75',
	},
};

export const theme = createThemeContract({
	colours: {
		primary: '',
		secondary: '',
		alternative: '',
		text: '',
		surface: '',
		surfaceAlt: '',
	},
	boxShadow: {
		lowElevation: '',
	},
	...commonVars,
});

export const lightThemeClass = createTheme(theme, {
	colours: {
		primary: colours.astronaut,
		secondary: colours.webOrange,
		alternative: colours.azureRadiance,
		text: colours.shark,
		surface: colours.solitudeTint70,
		surfaceAlt: colours.solitude,
	},
	boxShadow: {
		// CREDIT: https://www.joshwcomeau.com/shadow-palette/
		lowElevation: `-1px 1px 1.6px hsl(${colours.solitudeShadow} / 0.34), -1.7px 1.7px 2.7px -1.2px hsl(${colours.solitudeShadow} / 0.34), -4px 4px 6.4px -2.5px hsl(${colours.solitudeShadow} / 0.34)`,
	},
	...commonVars,
});

export const darkThemeClass = createTheme(theme, {
	colours: {
		primary: colours.solitudeShade10,
		secondary: colours.shark,
		alternative: colours.webOrange,
		text: colours.solitude,
		surface: colours.shark,
		surfaceAlt: colours.sharkTint10,
	},
	boxShadow: {
		// CREDIT: https://www.joshwcomeau.com/shadow-palette/
		lowElevation: `-1px 1px 1.4px hsl(${colours.sharkShadow} / 0.48), -1.5px 1.5px 2.1px -1.7px hsl(${colours.sharkShadow} / 0.39), -4px 4px 5.5px -3.5px hsl(${colours.sharkShadow} / 0.3)`,
	},
	...commonVars,
});
