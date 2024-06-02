import { StyleSheet } from "react-native";
import { color, spacing } from "@themes";

export default StyleSheet.create({
  flex: {
    flexGrow: 0,
  },
  circle: {
    width: spacing.size64,
    height: spacing.size64,
    alignItems: "center",
    borderRadius: spacing.size100,
    justifyContent: "center",
    margin: spacing.size12,
    borderColor: color.white,
  },
  textNumber: {
    fontSize: spacing.size24,
    color: color.white,
  },
});
