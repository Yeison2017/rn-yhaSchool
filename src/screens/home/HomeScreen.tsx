import { useState } from "react";
import { StyleSheet } from "react-native";

import { Button, ButtonText, SafeAreaLayout, Text } from "@/components";
import { useNavigationApp } from "@/interfaces";

const HomeScreen = () => {
  const [cars, setCars] = useState([]);
  const { navigation } = useNavigationApp();

  return (
    <SafeAreaLayout>
      {cars.map((car: any, index: number) => (
        <Text key={index}>{car.brand}</Text>
      ))}
      <Button onPress={() => navigation.navigate("Login")} w={120}>
        <ButtonText>Login</ButtonText>
      </Button>
    </SafeAreaLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
