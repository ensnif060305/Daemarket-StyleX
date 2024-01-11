import { EyeIcon, LogoIcon } from "@/assets/icons"
import { Input } from "@/components/Common/Input"
import { font } from "../styles/globalToken.stylex"
import { Button } from "@/components/Common/Button"
import * as stylex from "@stylexjs/stylex"
import { useState } from "react"
import { VStack } from "@/components/Stack"

const PasswordPage = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.wrapper)}>
        <LogoIcon variant="BlackDesc" />
        <VStack style={styles.inputStack}>
          <Input
            type="allowEmail"
            label="이메일"
            placeHolder="이메일을 입력해주세요"
            errorMessage="존재하지 않는 계정이에요">
            <span {...stylex.props(font.body1)}>@dsm.hs.kr</span>
            <Button size="small" label="인증코드 발송" variant="onlyText" />
          </Input>
          <Input
            type="allowButton"
            label="인증코드"
            placeHolder="인증코드를 입력해주세요"
            errorMessage="코드가 잘못되었어요">
            <Button size="small" label="인증하기" variant="onlyText" />
          </Input>
          <Input
            type={visible ? "passwordVisible" : "password"}
            label="새 비밀번호"
            placeHolder="새로 사용할 비밀번호를 입력해주세요">
            <EyeIcon visible={visible} onClick={() => setVisible(!visible)} />
          </Input>
        </VStack>
        <Button size="small" label="비밀번호 변경" variant="primary" style={styles.PasswordButton} />
      </div>
    </div>
  )
}

export default PasswordPage

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
  PasswordButton: {
    width: "410px",
    height: "48px",
  },
})
