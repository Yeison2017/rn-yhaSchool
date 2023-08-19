import { styled } from "../../../../config/theme";
import { TextInput } from "react-native";

export default styled(
  TextInput,
  {
    flex: 1,
    color: "$textLight900",
    fontFamily: "$textRegular",
    props: {
      placeholderTextColor: "$textLight500",
    },
    _dark: {
      color: "$textDark50",
      props: {
        placeholderTextColor: "$textDark400",
      },
    },
    _web: {
      cursor: "text",
      ":disabled": {
        cursor: "not-allowed",
      },
    },
  },
  { ancestorStyle: ["_input"], resolveProps: ["placeholderTextColor"] },
  {
    propertyTokenMap: {
      placeholderTextColor: "colors",
    },
  }
);
