import { StyleSheet } from "react-native";

import GluestackUIProvider from "./GluestackUIProvider";
import SafeAreaProvider from "./SafeAreaProvider";
import NavigationProvider from "./NavigationProvider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <GluestackUIProvider>
      <SafeAreaProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
};

export default Providers;

const styles = StyleSheet.create({});
