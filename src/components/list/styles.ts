import { StyleSheet } from "react-native";
import { spacing } from "../../themes";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: spacing.size48,
    paddingHorizontal: spacing.size16,
    alignItems: "center",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
});
