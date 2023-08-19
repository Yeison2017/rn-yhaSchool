import { StyleSheet } from "react-native";

import { Providers } from "./src/config/providers";
import { useLoadFonts } from "./src/config/theme";
import { StackApp } from "./src/navigation";

const App = () => {
  const { fontsLoaded } = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Providers>
      <StackApp />
    </Providers>
  );
};

export default App;

const styles = StyleSheet.create({});
