import { colors } from "../../styles/globalToken.stylex"
import * as stylex from "@stylexjs/stylex"

export const style = stylex.create({
  container: {
    width: "100%",
    height: "auto",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    padding: "64px 0",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderTopColor: colors.gray300,
    borderTopStyle: "solid",
    borderTopWidth: "1px",
  },
  infoContainer: {
    gap: "32px",
  },
  infoWrapper: {
    gap: "4px",
  },
  devContainer: {
    gap: "24px",
  },
  devWrapper: {
    gap: "12px",
  },
  developmentField: {
    width: "72px",
    height: "20px",
  },
  footerSpan: {
    color: colors.gray500,
  },
})
