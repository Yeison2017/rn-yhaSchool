import { StyleSheet } from "react-native";

import GluestackUIProvider from "./GluestackUIProvider";
import { config } from "../theme";
import SafeAreaProvider from "./SafeAreaProvider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </GluestackUIProvider>
  );
};

export default Providers;

const styles = StyleSheet.create({});
