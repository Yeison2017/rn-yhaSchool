import { Pressable } from "react-native";
import { styled } from "../../../../config/theme";

export default styled(
  Pressable,
  {
    justifyContent: "center",
    alignItems: "center",
    _web: {
      ":disabled": {
        cursor: "not-allowed",
      },
    },
  },
  { descendantStyle: ["_icon"] }
);
