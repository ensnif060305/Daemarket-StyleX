import { Header } from "@/components/Header"
import { Outlet } from "react-router-dom"

export const HeaderLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet/>
      </div>
    </div>
  )
}
