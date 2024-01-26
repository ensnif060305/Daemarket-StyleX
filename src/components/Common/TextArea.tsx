import * as stylex from "@stylexjs/stylex"
import { colors, font } from "../../styles/globalToken.stylex"

interface ITextArea {
  label: string
  placeHolder: string
}

export const TextArea = ({ label, placeHolder }: ITextArea) => {
  return (
    <div {...stylex.props(styles.textAreaWrapper)}>
      <span {...stylex.props(font.body3, styles.label)}>{label}</span>
      <textarea {...stylex.props(font.body1, styles.textArea)} placeholder={placeHolder} maxLength={20} />
    </div>
  )
}

const styles = stylex.create({
  textAreaWrapper: {
    display: "flex",
    width: "100%",
    height: "96px",
    flexDirection: "column",
    gap: "8px",
  },
  textArea: {
    resize: "none",
    display: "flex",
    padding: "12px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.gray300,
    background: colors.gray200,
    color: colors.gray800,
    "::placeholder": {
      color: colors.gray500,
    },
  },
  label: {
    color: colors.gray500,
  },
})
