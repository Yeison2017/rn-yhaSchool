import { Text } from "react-native";
import { styled } from "../../../../config/theme";

export default styled(
  Text,
  {
    color: "$textLight0",
    fontFamily: "$textRegular",
    //@ts-ignore
    userSelect: "none",
  },
  { ancestorStyle: ["_text"], DEBUG: "STYLEDBUTTONTEXT" }
);
