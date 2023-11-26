import { View } from "react-native";
import { SafeAreaProvider as Provider } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const SafeAreaProvider = ({ children }: Props) => {
  return (
    <Provider>
      <View />
      {children}
    </Provider>
  );
};

export default SafeAreaProvider;
