import { Footer } from "@/components/Footer"
import { Fragment } from "react"
import { Outlet } from "react-router-dom"

export const FooterLayout = () => {
  return (
    <Fragment>
      <Outlet />
      <Footer/>
    </Fragment>
  )
}