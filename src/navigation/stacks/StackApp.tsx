import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen } from "../../screens";
import { RootStackAppParams } from "../interfaces";

const Stack = createNativeStackNavigator<RootStackAppParams>();

const StackApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackApp;
