import * as stylex from "@stylexjs/stylex"
import { colors, font } from "../../styles/globalToken.stylex"

interface IButton {
  label: string
  color: "secondary" | "primary"
  style?: stylex.StyleXStyles<{
    width?: React.CSSProperties["width"]
    height?: React.CSSProperties["height"]
    padding?: React.CSSProperties["padding"]
  }>
}

export const Button = ({ label, color, style }: IButton) => {
  return <button {...stylex.props(font.heading3, styles.button, styles[color], style)}>{label}</button>
}

const styles = stylex.create({
  button: {
    display: "flex",
    padding: "16px 0px",
    width: "520px",
    height: "54px",
    borderRadius: "12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  primary: {
    color: colors.gray100,
    backgroundColor: {
      default: colors.primary300,
      ":active": colors.primary400,
    },
  },
  secondary: {
    color: colors.primary300,
    backgroundColor: {
      default: colors.primary100,
      ":active": colors.primary200,
    },
  },
})
