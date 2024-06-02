import { StyleSheet } from "react-native";
import { color, spacing } from "@themes";

export default StyleSheet.create({
  container: {
    padding: spacing.size16,
  },
  label: {
    color: color.primary,
    fontSize: spacing.size16,
    paddingBottom: spacing.size12,
    fontWeight: "600",
  },
  viewInput: {
    borderWidth: 1,
    paddingHorizontal: spacing.size16,
    borderRadius: spacing.size5,
    backgroundColor: color.backgroundColor,
    borderColor: color.backgroundColor,
  },
  input: {
    minHeight: spacing.size44,
  },
});
