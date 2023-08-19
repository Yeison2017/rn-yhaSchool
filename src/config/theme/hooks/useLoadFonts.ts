import { useFonts } from "expo-font";

import { FONTS } from "../../constants";

const useLoadFonts = () => {
  let [fontsLoaded] = useFonts({ ...FONTS });

  return { fontsLoaded };
};

export default useLoadFonts;
