import { colors } from "../../styles/globalToken.stylex"
import * as stylex from "@stylexjs/stylex"

export const style = stylex.create({
  container: {
    maxWidth: "1280px",
    minWidth: "720px",
    width: "100%",
    height: "60px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: colors.gray300,
  },
  linkButton1: {
    display: "flex",
    width: "120px",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.gray400,
    backgroundColor: "transparent",
    gap: "2px",
  },
  linkButton2: {
    display: "flex",
    width: "100px",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.gray400,
    backgroundColor: "transparent",
    gap: "2px",
  },
  activeButton: {
    color: colors.gray800,
  },
})
