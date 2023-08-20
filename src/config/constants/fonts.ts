import { FontSource } from "expo-font";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/dev";

interface IFonts {
  textRegular: string;
  textMedium: string;
  textBold: string;
}

type typeFonts = "Roboto_400Regular" | "Roboto_500Medium" | "Roboto_700Bold";

export const FONTS: Record<typeFonts, FontSource> = {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
};

export const FONTS_NAME: Record<keyof IFonts, typeFonts> = {
  textRegular: "Roboto_400Regular",
  textMedium: "Roboto_500Medium",
  textBold: "Roboto_700Bold",
};
