import { ErrorIcon, SearchIcon } from "@/assets/icons"
import { colors, font } from "../../styles/globalToken.stylex"
import * as stylex from "@stylexjs/stylex"
import { useState, ReactNode, ChangeEvent, CSSProperties } from "react"
import { VStack } from "../Stack"

interface IInput {
  type: "email" | "search" | "text" | "button" | "allowButton" | "allowEmail" | "password" | "passwordVisible"
  value?: string
  placeHolder?: string
  label?: string
  maxLength?: number
  errorMessage?: string
  children?: ReactNode
  style?: stylex.StyleXStyles<{
    width?: CSSProperties["width"]
  }>
}

export const Input = ({ value, placeHolder, label, maxLength, type, errorMessage, children, style }: IInput) => {
  const [count, setCount] = useState(value?.length || 0)

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value.length)
  }

  return (
    <div {...stylex.props(styles.container, style)}>
      <div {...stylex.props(styles.wrapper)}>
        <VStack style={styles.inputContainer}>
          {label && (
            <div>
              <span {...stylex.props(font.body4, styles.label)}>{label}</span>
              {maxLength && (
                <span {...stylex.props(font.body4, styles.label)}>
                  {count} / {maxLength}
                </span>
              )}
            </div>
          )}
          <div {...stylex.props(styles.inputWrapper)}>
            {type === "search" && (
              <div {...stylex.props(styles.inputSide1)}>
                <SearchIcon />
              </div>
            )}
            <input
              type={type === "password" ? type : "text"}
              {...stylex.props(
                font.body1,
                styles.input,
                width[type],
                type === "password" && count !== 0 && styles.inputPassword,
              )}
              value={value}
              placeholder={placeHolder}
              onChange={onInputHandler}
              maxLength={maxLength}
            />
            {children && <div {...stylex.props(styles.inputSide2)}>{children}</div>}
          </div>
        </VStack>
        {errorMessage && (
          <div {...stylex.props(styles.errorWrapper)}>
            <ErrorIcon />
            <span {...stylex.props(font.body3, styles.error)}>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = stylex.create({
  container: {
    width: "410px",
  },
  wrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
  },
  inputContainer: {
    width: "100%",
    gap: "4px",
  },
  label: {
    width: "100%",
    color: colors.gray500,
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "12px",
    width: "100%",
    borderRadius: "8px",
    height: "48px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.gray300,
    backgroundColor: colors.gray200,
  },
  input: {
    width: "50%",
    height: "100%",
    padding: "12px",
    backgroundColor: "transparent",
    color: colors.gray800,
    "::placeholder": {
      color: colors.gray500,
    },
  },
  inputPassword: {
    letterSpacing: "-5px",
  },
  inputSide1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: "9px",
    width: null,
    gap: "5px",
  },
  inputSide2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "9px",
    width: null,
    gap: "5px",
  },
  errorWrapper: {
    height: "20px",
    display: "flex",
    alignItems: "flex-start",
    gap: "4px",
  },
  error: {
    color: colors.red,
  },
})

const width = stylex.create({
  email: {
    width: "65%",
  },
  password: {
    width: "90%",
  },
  passwordVisible: {
    width: "90%",
  },
  search: {
    width: "85%",
  },
  allowEmail: {
    width: "50%",
  },
  text: {
    width: "100%",
  },
  allowButton: {
    width: "75%",
  },
  button: {
    width: "75%",
  },
})
