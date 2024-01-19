import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import PasswordPage from "./pages/PasswordPage"
import UsedMainPage from "./pages/used/MainPage"
import GroupMainPage from "./pages/group/MainPage"
import { HeaderLayout } from "./pages/HeaderLayout"
import { FooterLayout } from "./pages/FooterLayout"
import ChatPage from "@/pages/chat/ChatPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route element={<HeaderLayout />}>
          <Route element={<FooterLayout />}>
            <Route path="/used/main" element={<UsedMainPage />} />
            <Route path="/group/main" element={<GroupMainPage />} />
          </Route>
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
