import { styled } from "../../../../theme";
import { ActivityIndicator } from "react-native";

export default styled(
  ActivityIndicator,
  {},
  { ancestorStyle: ["_spinner"], resolveProps: ["color"] }
);
