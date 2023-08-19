import { FontSource } from "expo-font";
import {
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/dev";

interface IFonts {
  textRegular: string;
  textBold: string;
}

type typeFonts = "RobotoCondensed_400Regular" | "RobotoCondensed_700Bold";

export const FONTS: Record<typeFonts, FontSource> = {
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
};

export const FONTS_NAME: Record<keyof IFonts, typeFonts> = {
  textRegular: "RobotoCondensed_400Regular",
  textBold: "RobotoCondensed_700Bold",
};
