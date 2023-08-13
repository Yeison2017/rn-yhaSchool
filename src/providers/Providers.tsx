import { StyleSheet } from "react-native";

import GluestackUIProvider from "./GluestackUIProvider";
import { config } from "../theme";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <GluestackUIProvider config={config.theme}>{children}</GluestackUIProvider>
  );
};

export default Providers;

const styles = StyleSheet.create({});
