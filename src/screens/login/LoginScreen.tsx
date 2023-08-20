import { StyleSheet } from "react-native";

import {
  Box,
  Button,
  Text,
  Input,
  VStack,
  MobileLogin,
  SafeAreaLayout,
} from "../../components";
import { colors, fontSizes } from "../../config/theme";
import { useNavigationApp } from "../../interfaces";

const LoginScreen = () => {
  const { navigation } = useNavigationApp();
  return (
    <SafeAreaLayout>
      <Box style={styles.container}>
        <VStack style={styles.body}>
          <MobileLogin style={styles.mobileLogin} />
          <Text style={styles.title}>YHA School</Text>

          <VStack style={styles.containerInput}>
            <Input>
              <Input.Input placeholder="Usuario" />
            </Input>
            <Input>
              <Input.Input placeholder="Contraseña" />
            </Input>
          </VStack>

          <Button
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Button.Text>Iniciar sesión</Button.Text>
          </Button>
        </VStack>
      </Box>
    </SafeAreaLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  body: {
    gap: 50,
  },
  title: {
    textAlign: "center",
    fontSize: fontSizes["2xl"],
    lineHeight: fontSizes["2xl"],
    color: colors.primary700,
  },
  containerInput: {
    gap: 8,
    alignItems: "center",
  },
  button: {
    width: 142,
    alignSelf: "center",
  },
  mobileLogin: {
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
    height: 200,
  },
});
