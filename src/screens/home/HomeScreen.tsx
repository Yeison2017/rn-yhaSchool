import { StyleSheet } from "react-native";

import { Button, SafeAreaLayout, Text } from "../../components";
import { useNavigationApp } from "../../interfaces";

const HomeScreen = () => {
  const { navigation } = useNavigationApp();
  return (
    <SafeAreaLayout>
      <Text>HomeScreen1</Text>
      <Button onPress={() => navigation.navigate("Login")}>
        <Button.Text>Login</Button.Text>
      </Button>
    </SafeAreaLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
