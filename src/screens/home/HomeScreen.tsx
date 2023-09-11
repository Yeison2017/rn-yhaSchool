import { StyleSheet } from "react-native";
import axios from "axios";

import { Button, SafeAreaLayout, Text } from "../../components";
import { useNavigationApp } from "../../interfaces";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [cars, setCars] = useState([]);
  const { navigation } = useNavigationApp();

  const query = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cars");
      console.log("response: ", JSON.stringify(response.data, null, 2));
      setCars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    query();
  }, []);

  return (
    <SafeAreaLayout>
      <Text>HomeScreen1</Text>
      {cars.map((car: any, index: number) => (
        <Text key={index}>{car.brand}</Text>
      ))}
      <Button onPress={() => navigation.navigate("Login")} w={120}>
        <Button.Text>Login</Button.Text>
      </Button>
    </SafeAreaLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
