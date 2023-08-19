import { StyleSheet } from "react-native";

import { LoginScreen } from "./src/screens";
import { Providers } from "./src/config/providers";
import { useLoadFonts } from "./src/config/theme";

const App = () => {
  const { fontsLoaded } = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Providers>
      <LoginScreen />
    </Providers>
  );
};

export default App;

const styles = StyleSheet.create({});
