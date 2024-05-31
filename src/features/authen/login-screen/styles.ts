import { StyleSheet } from "react-native";
import { spacing } from "../../../themes";
import { constant } from "../../../themes/constants";

export default StyleSheet.create({
  screen: { flex: 1 ,},
  image:{
    width: constant.width / 2,
    height: constant.width / 2,
    alignSelf: "center",
    marginTop: 30,
  }
});
