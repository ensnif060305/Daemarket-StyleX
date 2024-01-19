import { LogoIcon } from "@/assets/icons"
import { pathState } from "@/atoms"
import { Link, useLocation } from "react-router-dom"
import { useRecoilState } from "recoil"
import { style as $ } from "./style"
import * as stylex from "@stylexjs/stylex"
import { HStack } from "../Stack"
import { font } from "../../styles/globalToken.stylex"
import { useEffect } from "react"

export const Header = () => {
  const [path, setPath] = useRecoilState(pathState)
  const location = useLocation()

  const isButtonActive = (buttonPath: string) => {
    return location.pathname.includes(buttonPath)
  }

  useEffect(() => {
    setPath(location.pathname.split("/")[1])
  }, [])

  return (
    <div {...stylex.props($.container)}>
      <div {...stylex.props($.wrapper)}>
        <LogoIcon />
        <HStack>
          <Link to="/used/main">
            <button {...stylex.props(font.body3, $.linkButton1, isButtonActive("/used") && $.activeButton)}>
              중고 거래
            </button>
          </Link>
          <Link to="/group/main">
            <button {...stylex.props(font.body3, $.linkButton1, isButtonActive("/group") && $.activeButton)}>
              공동 구매
            </button>
          </Link>
        </HStack>
        <HStack>
          <Link to={`/${path}/all`}>
            <button {...stylex.props(font.body3, $.linkButton2, isButtonActive(`/${path}/all`) && $.activeButton)}>
              전체 메물
            </button>
          </Link>
          <Link to="/chat">
            <button {...stylex.props(font.body3, $.linkButton2, isButtonActive("/chat") && $.activeButton)}>
              채팅
            </button>
          </Link>
          <Link to="/mypage">
            <button {...stylex.props(font.body3, $.linkButton2, isButtonActive("/mypage") && $.activeButton)}>
              마이페이지
            </button>
          </Link>
        </HStack>
      </div>
    </div>
  )
}
