import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import PasswordPage from "./pages/PasswordPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/password" element={<PasswordPage />} />
      </Routes>
    </BrowserRouter>
  )
}
