import { StyleSheet } from "react-native";
import { color, spacing } from "@themes";
import { constant } from "@themes/constants";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  title: {
    fontSize: spacing.size14,
  },
  card: {
    backgroundColor: color.primary,
    width: constant.width - spacing.size32,
    height: spacing.size100,
    borderRadius: spacing.size10,
    marginTop: spacing.size20,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: color.white,
    fontSize: spacing.size32,
    fontWeight: "bold",
  },
  cardTransfer: {
    backgroundColor: color.doveGray,
    width: constant.width - spacing.size32,
    borderRadius: spacing.size10,
    marginTop: spacing.size20,
    justifyContent: "center",
    alignItems: "center",
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: constant.width - spacing.size80,
    paddingVertical: spacing.size12,
  },
  textWhite: {
    color: color.white,
  },
});
