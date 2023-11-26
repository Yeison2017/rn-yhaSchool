// import {IFontFamily} from '@/interfaces';

export const customColors = {
  primary0: "#93E090",
  primary50: "#82DB7E",
  primary100: "#72D76E",
  primary200: "#53CE4E",
  primary300: "#3BBE35",
  primary400: "#319E2C",
  primary500: "#277E23",
  primary600: "#216A1D",
  primary700: "#1B5618",
  primary800: "#144212",
  primary900: "#0E2E0D",
  primary950: "#0B240A",
};

interface IFontFamily {
  heading: string;
  body: string;
  mono: string;
  textRegular: string;
  textRegularSecondary: string;
  textBold: string;
  textItalic: string;
  textBoldItalic: string;
}

interface INameFont {
  "CenturyGothic-Bold": string;
  "CenturyGothic-Italic": string;
  "CenturyGothic-BoldItalic": string;
  CenturyGothic: string;
  "Poppins-Regular": string;
}

const fontFamily: Record<keyof IFontFamily, keyof INameFont> = {
  heading: "CenturyGothic",
  body: "CenturyGothic",
  mono: "CenturyGothic",
  textRegular: "CenturyGothic",
  textRegularSecondary: "Poppins-Regular",
  textBold: "CenturyGothic-Bold",
  textItalic: "CenturyGothic-Italic",
  textBoldItalic: "CenturyGothic-BoldItalic",
};

export const fonts: Record<keyof IFontFamily, keyof INameFont> = {
  heading: fontFamily.textRegular,
  body: fontFamily.textRegular,
  mono: fontFamily.textRegular,
  textRegular: fontFamily.textRegular,
  textRegularSecondary: fontFamily.textRegularSecondary,
  textBold: fontFamily.textBold,
  textItalic: fontFamily.textItalic,
  textBoldItalic: fontFamily.textBoldItalic,
};

export const customFontSize = {
  "2xs": 8,
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  "2xl": 22,
  "2.5xl": 26,
  "3xl": 28,
  "4xl": 34,
  "4.5xl": 40,
  "5xl": 46,
  "6xl": 58,
  "7xl": 70,
  "8xl": 94,
  "9xl": 126,
};
