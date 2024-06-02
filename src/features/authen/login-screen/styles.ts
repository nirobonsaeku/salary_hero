import { StyleSheet } from "react-native";
import { spacing } from "@themes";
import { constant } from "@themes/constants";

export default StyleSheet.create({
  screen: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    width: constant.width / 2,
    height: constant.width / 2,
    alignSelf: "center",
    marginTop: spacing.size32,
  },
});
