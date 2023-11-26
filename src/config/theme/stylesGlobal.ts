import { config } from "./gluestack-ui.config";

const colorsTheme = config.tokens.colors;
const fontSizesTheme = config.tokens.fontSizes;
const fontsTheme = config.tokens.fonts;

export const colors: typeof colorsTheme = colorsTheme;

export const fontSizes: typeof fontSizesTheme = fontSizesTheme;

export const fontFamily: typeof fontsTheme = fontsTheme;
