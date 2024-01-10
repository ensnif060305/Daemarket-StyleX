import { ReactNode, CSSProperties } from "react"
import * as stylex from "@stylexjs/stylex"

type DirectionType = "row" | "column" | "row-reverse" | "column-reverse"

type ItemType = "start" | "center" | "end" | "space-around" | "space-between" | "space-evenly"

type WrapType = "nowrap" | "wrap" | "wrap-reverse"

export interface StackProps {
  children?: ReactNode
  dir?: DirectionType
  style?: stylex.StyleXStyles<{
    width?: CSSProperties["width"]
    height?: CSSProperties["height"]
    padding?: CSSProperties["padding"]
    alignItems?: ItemType
    justifyContent?: ItemType
    gap?: CSSProperties["gap"]
    margin?: CSSProperties["margin"]
    wrap?: WrapType
  }>
}

export const Stack = ({ dir, children, style }: StackProps) => {
  return <div {...stylex.props(styles.container(dir), style)}>{children}</div>
}

const styles = stylex.create({
  container: (dir) => ({
    display: "flex",
    flexDirection: dir,
    width: "auto",
    height: "auto",
  }),
})
