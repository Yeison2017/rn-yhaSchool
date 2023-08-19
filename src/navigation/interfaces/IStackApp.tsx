import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackAppParams = {
  Login: undefined;
  Home: undefined;
};

export type StackAppProps = NativeStackNavigationProp<RootStackAppParams>;
