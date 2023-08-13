import { StyleSheet } from "react-native";

import { LoginScreen } from "./src/screens";
import { Providers } from "./src/providers";

export default function App() {
  return (
    <Providers>
      <LoginScreen />
    </Providers>
  );
}

const styles = StyleSheet.create({});
