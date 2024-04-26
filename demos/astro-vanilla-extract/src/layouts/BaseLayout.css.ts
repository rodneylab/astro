import { style } from '@vanilla-extract/css';
import { theme } from '../styles/themes.css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	marginBlock: theme.spacing.size12,
	backgroundColor: theme.colours.surfaceAlt,
	color: theme.colours.text,
	maxWidth: '100%',
});

export const wrapper = style({
	paddingBlock: theme.spacing.size6,
	marginBlock: theme.spacing.size12,
	backgroundColor: theme.colours.surface,
	boxShadow: theme.boxShadow.lowElevation,
	'@media': {
		'(min-width: 48rem)': {
			width: theme.widths.maxWidth3XL,
		},
	},
});

export const contentWrapper = style({
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingBottom: theme.spacing.size4,
	paddingLeft: theme.spacing.size6,
	paddingRight: theme.spacing.size6,
	maxWidth: '100%',
	'@media': {
		'(min-width: 48rem)': {
			maxWidth: theme.widths.maxWidthText,
			paddingLeft: theme.spacing.size0,
			paddingRight: theme.spacing.size0,
		},
	},
});

export const intro = style({
	color: theme.colours.primary,
	fontFamily: theme.fontFamily.subheading,
	fontSize: theme.fontSize.size3,
});

export const footer = style({
	selectors: {
		[`${wrapper} &`]: {
			fontSize: theme.fontSize.size2,
		},
	},
});
