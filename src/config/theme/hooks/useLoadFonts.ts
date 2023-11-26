import { useFonts } from "expo-font";

import { FONTS } from "../fonts";

const useLoadFonts = () => {
  let [fontsLoaded] = useFonts({ ...FONTS });

  return { fontsLoaded };
};

export default useLoadFonts;
