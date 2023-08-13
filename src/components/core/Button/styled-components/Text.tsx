import { Text } from "react-native";
import { styled } from "../../../../theme";

export default styled(
  Text,
  {
    color: "$textLight0",
    fontFamily: "$body",
    //@ts-ignore
    userSelect: "none",
  },
  { ancestorStyle: ["_text"], DEBUG: "STYLEDBUTTONTEXT" }
);
