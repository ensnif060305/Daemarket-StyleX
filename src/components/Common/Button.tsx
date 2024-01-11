import * as stylex from "@stylexjs/stylex"
import { colors, font } from "../../styles/globalToken.stylex"

interface IButton {
  label: string
  size: "small" | "medium"
  variant: "secondary" | "primary" | "onlyText"
  style?: stylex.StyleXStyles<{
    width?: React.CSSProperties["width"]
    height?: React.CSSProperties["height"]
    padding?: React.CSSProperties["padding"]
  }>
}

export const Button = ({ label, size, variant, style }: IButton) => {
  return (
    <button {...stylex.props(font.heading3, size === "small" && font.body1, styles.button, styles[variant], style)}>
      {label}
    </button>
  )
}

const styles = stylex.create({
  button: {
    display: "flex",
    padding: "16px 0px",
    maxWidth: "520px",
    maxHeight: "54px",
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
  onlyText: {
    color: colors.primary300,
    backgroundColor: "transparent",
  },
})
