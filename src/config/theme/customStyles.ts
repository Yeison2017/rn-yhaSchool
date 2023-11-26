import { IFonts, typeFonts } from "./interfaces";

export const customColors = {
  primary0: "#E5F1FB",
  primary50: "#CCE9FF",
  primary100: "#ADDBFF",
  primary200: "#7CC2FF",
  primary300: "#4AA9FF",
  primary400: "#1A91FF",
  primary500: "#0077E6",
  primary600: "#005DB4",
  primary700: "#004282",
  primary800: "#002851",
  primary900: "#011838",
  primary950: "#000711",
};

export const fonts: Record<keyof IFonts, typeFonts> = {
  heading: "Roboto_400Regular",
  body: "Roboto_400Regular",
  mono: "Roboto_400Regular",
  textRegular: "Roboto_400Regular",
  textMedium: "Roboto_500Medium",
  textBold: "Roboto_700Bold",
};
