import { StyleSheet } from "react-native";

import { Box, Button, Text, Input, VStack } from "../../components";
import { colors, fontSizes } from "../../theme";

const LoginScreen = () => {
  return (
    <Box style={styles.container}>
      <VStack style={styles.body}>
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
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  body: {
    gap: 50,
  },
  title: {
    textAlign: "center",
    fontSize: fontSizes.lg,
    color: colors.primary700,
  },
  containerInput: {
    gap: 8,
  },
  button: {
    width: 142,
    alignSelf: "center",
  },
});
