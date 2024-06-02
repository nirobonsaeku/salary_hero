import { StyleSheet } from "react-native";
import { color, spacing, } from "@themes";
import { constant } from "@themes/constants";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: spacing.size10,
    paddingHorizontal: spacing.size20,
    borderRadius: spacing.size5,
    width: constant.width - spacing.size32,
  },
  title: {
    color: color.white,
    fontSize: spacing.size16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
