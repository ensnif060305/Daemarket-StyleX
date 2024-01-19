import { Header } from "@/components/Header"
import { Outlet } from "react-router-dom"
import * as stylex from "@stylexjs/stylex"

export const HeaderLayout = () => {
  return (
    <div {...stylex.props(style.container)}>
      <div {...stylex.props(style.wrapper)}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

const style = stylex.create({
  container: {
    width: "100vw",
    height: "100vh",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})
