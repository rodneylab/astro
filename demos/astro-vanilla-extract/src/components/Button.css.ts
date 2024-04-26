import { style } from '@vanilla-extract/css';
import { theme } from '../styles/themes.css';

export const button = style({
	borderStyle: 'none',
	backgroundColor: 'transparent',
	color: theme.colours.primary,
	marginLeft: 'auto',
	padding: theme.spacing.size2,
});
