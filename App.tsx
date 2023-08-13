import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { LoginScreen } from "./src/screens";
import { Providers } from "./src/providers";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <LoginScreen />
    //   <StatusBar style="auto" />
    // </View>
    <Providers>
      <LoginScreen />
    </Providers>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
