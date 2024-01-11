import { EyeIcon, LogoIcon } from "@/assets/icons"
import { Button } from "@/components/Common/Button"
import { Input } from "@/components/Common/Input"
import { colors, font } from "../styles/globalToken.stylex"
import * as stylex from "@stylexjs/stylex"
import { HStack, VStack } from "@/components/Stack"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignupPage = () => {
  const navigate = useNavigate()
  const [visible1, setVisible1] = useState<boolean>(false)
  const [visible2, setVisible2] = useState<boolean>(false)

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.wrapper)}>
        <LogoIcon variant="BlackDesc" />
        <VStack style={styles.inputStack}>
          <Input type="text" label="이름" placeHolder="이름을 입력해주세요" />
          <Input
            type="allowEmail"
            label="이메일"
            placeHolder="이메일을 입력해주세요"
            errorMessage="존재하지 않는 계정이에요">
            <span {...stylex.props(font.body1)}>@dsm.hs.kr</span>
            <Button size="small" label="중복확인" variant="onlyText" />
          </Input>
          <Input
            type="allowButton"
            label="인증코드"
            placeHolder="인증코드를 입력해주세요"
            errorMessage="코드가 잘못되었어요">
            <Button size="small" label="인증하기" variant="onlyText" />
          </Input>
          <Input
            type={visible1 ? "passwordVisible" : "password"}
            label="비밀번호"
            placeHolder="비밀번호를 입력해주세요">
            <EyeIcon visible={visible1} onClick={() => setVisible1(!visible1)} />
          </Input>
          <Input
            type={visible2 ? "passwordVisible" : "password"}
            label="비밀번호 확인"
            placeHolder="비밀번호를 다시 입력해주세요">
            <EyeIcon visible={visible2} onClick={() => setVisible2(!visible2)} />
          </Input>
        </VStack>
        <VStack style={styles.buttonStack}>
          <Button size="small" label="회원가입 하기" variant="primary" style={styles.loginButton} />
          <HStack style={styles.inputStack}>
            <button {...stylex.props(font.body1, styles.serveButton)} onClick={() => navigate("/login")}>
              로그인
            </button>
            <button {...stylex.props(font.body1, styles.serveButton)}>비밀번호 찾기</button>
          </HStack>
        </VStack>
      </div>
    </div>
  )
}

export default SignupPage

const styles = stylex.create({
  container: {
    minWidth: "764px",
    width: "100vw",
    height: "100vh",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    gap: "48px",
  },
  inputStack: {
    gap: "16px",
  },
  buttonStack: {
    gap: "12px",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "410px",
    height: "48px",
  },
  serveButton: {
    backgroundColor: "transparent",
    color: colors.gray500,
    textDecorationLine: "underline",
  },
})
