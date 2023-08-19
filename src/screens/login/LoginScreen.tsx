import { StyleSheet } from "react-native";
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
  RobotoMono_400Regular,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/dev";

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

const LoginScreen = () => {
  return (
    <SafeAreaLayout>
      <Box style={styles.container}>
        <VStack style={styles.body}>
          <MobileLogin style={styles.mobileLogin} />
          <Text style={styles.title}>INICIAR SESIÓN</Text>

          <VStack style={styles.containerInput}>
            <Input>
              <Input.Input placeholder="Usuario" />
            </Input>
            <Input>
              <Input.Input placeholder="Contraseña" />
            </Input>
          </VStack>

          <Button style={styles.button}>
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
    fontSize: fontSizes.lg,
    color: colors.primary700,
    // fontFamily: "RobotoCondensed_400Regular",
  },
  containerInput: {
    gap: 8,
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
