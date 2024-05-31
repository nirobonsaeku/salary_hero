import { StyleSheet } from "react-native";
import { color, spacing } from "../../../themes";

export default StyleSheet.create({
  screen: { flex: 1 },
  root: { flex: 1, marginHorizontal: spacing.size16, justifyContent: "center" },
  title: {
    textAlign: "center",
    fontSize: spacing.size24,
    color: color.primary,
    marginBottom: spacing.size32,
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: spacing.size32,
    height: spacing.size32,
    lineHeight: spacing.size32,
    fontSize: spacing.size24,
    borderWidth: spacing.size2,
    borderColor: color.white,
    textAlign: "center",
    color: color.white,
    borderRadius: spacing.size5,
  },
  focusCell: {
    borderColor: color.red,
  },
});
