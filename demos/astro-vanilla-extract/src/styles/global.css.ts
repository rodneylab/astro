import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../styles/themes.css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("html", {
  display: "flex",
});

globalStyle("html, body", {
  fontSize: theme.fontSize.size1,
  fontFamily: theme.fontFamily.body,
});

globalStyle("body", {
  lineHeight: theme.lineHeight.normal,
  WebkitFontSmoothing: "antialiased",
  margin: [theme.spacing.size0, "auto"],
  transitionProperty: "background-color",
  transitionDuration: "200ms",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2", {
  overflowWrap: "break-word",
});

globalStyle("h1, h2", {
  color: theme.colours.primary,
  marginTop: theme.spacing.size12,
  marginBottom: theme.spacing.size6,
  fontWeight: theme.fontWeight.normal,
  fontFamily: theme.fontFamily.heading,
  fontSize: theme.fontSize.size4,
});

globalStyle("p", {
  lineHeight: theme.lineHeight.relaxed,
  marginBottom: theme.spacing.size4,
});

globalStyle("a", {
  color: theme.colours.primary,
  textUnderlineOffset: theme.spacing.size1,
});

globalStyle("a:hover, a:focus", {
  textDecoration: "none",
});

globalStyle("hr", {
  color: theme.colours.alternative,
  height: theme.spacing.px,
  marginBlock: theme.spacing.size10,
});

globalStyle("ul", {
  marginBottom: theme.spacing.size8,
});

globalStyle("ul li", {
  marginBottom: theme.spacing.size4,
});

globalStyle("button", {
  cursor: "pointer",
});

globalStyle("img, picture", {
  marginBlock: theme.spacing.size8,
  height: "auto",
});

globalStyle("code", {
  color: theme.colours.primary,
});

export const screenReaderText = style({
  border: 0,
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "insert(50%)",
  height: "1px",
  margin: "-1px",
  width: "1px",
  overflow: "hidden",
  position: "absolute",
  wordWrap: "normal",
});
