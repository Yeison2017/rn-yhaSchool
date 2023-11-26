import { useNavigation } from "@react-navigation/native";

import { StackAppProps } from "../navigation";

export const useNavigationApp = () => {
  const navigation = useNavigation<StackAppProps>();

  return { navigation };
};
