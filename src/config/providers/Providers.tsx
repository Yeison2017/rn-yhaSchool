import { StyleSheet } from "react-native";

import GluestackUIProvider from "./GluestackUIProvider";
import { config } from "../theme";
import SafeAreaProvider from "./SafeAreaProvider";
import NavigationProvider from "./NavigationProvider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
};

export default Providers;

const styles = StyleSheet.create({});
