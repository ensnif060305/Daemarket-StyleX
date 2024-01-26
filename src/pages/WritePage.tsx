import { Input } from "@/components/Common/Input"
import { HStack, VStack } from "@/components/Stack"
import { colors, font } from "../styles/globalToken.stylex"
import * as stylex from "@stylexjs/stylex"
import { TextArea } from "@/components/Common/TextArea"
import { Button } from "@/components/Common/Button"
import { placeConstant } from "@/constants/place"
import { ImgIcon } from "@/assets/icons"

const imgs = ["wef.png", "wefwefew.png", "sdfdsf.png"]

const WritePage = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.wrapper)}>
        <VStack style={styles.infoContainer}>
          <HStack style={styles.infoInputWrapper}>
            <Input type="text" maxLength={20} label="글 제목" placeHolder="글 제목을 입력해주세요" />
            <VStack style={styles.dropDownWrapper}>
              <span {...stylex.props(font.body4, styles.label)}>거래 종류</span>
              <select {...stylex.props(styles.dropdown)}>
                <option value="" disabled selected>
                  선택해주세요
                </option>
                <option>공동 거래</option>
                <option>중고 거래</option>
              </select>
            </VStack>
            <VStack style={styles.dropDownWrapper}>
              <span {...stylex.props(font.body4, styles.label)}>카테고리</span>
              <select {...stylex.props(styles.dropdown)}>
                <option value="" disabled selected>
                  선택해주세요
                </option>
                <option>전자기기</option>
                <option>음악</option>
                <option>식품</option>
                <option>책</option>
                <option>생활</option>
                <option>차량</option>
                <option>옷 식품</option>
                <option>기타</option>
              </select>
            </VStack>
            <Input type="text" placeHolder="10,000" label="가격">
              <span>원</span>
            </Input>
          </HStack>
          <TextArea label="내용" placeHolder="물건에 대한 설명을 입력해주세요" />
          <div {...stylex.props(styles.imgContainer)}>
            <span {...stylex.props(font.body4, styles.label)}>사진</span>
            <div {...stylex.props(styles.imgInputContainer)}>
              <div {...stylex.props(styles.imgsLine)}>
                {imgs.map((e) => (
                  <img src={e} key={e} {...stylex.props(styles.imgs)} />
                ))}
              </div>
              <div {...stylex.props(styles.imgInputWrapper)}>
                <input {...stylex.props(styles.imgInput)} type="file" id="fileInput" disabled={true} />
                <label {...stylex.props(styles.imgLabel)} htmlFor="fileInput">
                  <ImgIcon />
                  <span {...stylex.props(font.heading3, styles.imgLabelColor)}>사진 업로드</span>
                </label>
              </div>
            </div>
          </div>
          {imgs.length >= 3 ? (
            <VStack style={styles.placeContainer}>
              <span {...stylex.props(font.body4, styles.label)}>거래 층수</span>
              <HStack style={styles.placeWrapper}>
                {placeConstant.map((e) => (
                  <button {...stylex.props(font.body1, styles.placeButton)} key={e}>
                    {e}
                  </button>
                ))}
              </HStack>
            </VStack>
          ) : (
            <div>
              <input type="date" id="dateInput" placeholder="2000-00-00" />

              <input type="time" id="timeInput" placeholder="00:00"></input>
            </div>
          )}
        </VStack>
        <Button label="작성 완료" size="small" variant="primary" style={styles.postButton} />
      </div>
    </div>
  )
}

export default WritePage

export const styles = stylex.create({
  container: {
    maxWidth: "1280px",
    minWidth: "720px",
    width: "100%",
    height: "auto",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "24px 0",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "48px",
  },
  img: {
    width: "100%",
    minWidth: "720px",
    backgroundSize: "cover",
    borderRadius: "24px",
  },
  infoContainer: {
    width: "100%",
    justifyContent: "center",
    gap: "24px",
  },
  infoInputWrapper: {
    width: "100%",
    justifyContent: "space-between",
  },
  label: {
    color: colors.gray500,
  },
  dropdown: {
    width: "160px",
    height: "48px",
    padding: "0px 12px",
    gap: "4px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.gray300,
    backgroundColor: colors.gray200,
  },
  dropDownWrapper: {
    gap: "4px",
  },
  imgInputWrapper: {
    display: "flex",
    width: "100%",
    padding: "24px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.gray300,
    backgroundColor: colors.gray200,
  },
  imgContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
  },
  placeContainer: {
    gap: "4px",
  },
  placeWrapper: {
    gap: "8px",
  },
  placeButton: {
    display: "flex",
    width: "64px",
    padding: "8px 12px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.gray300,
    backgroundColor: colors.gray200,
    color: colors.gray800,
  },
  imgInput: {
    display: "none",
  },
  imgLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgLabelColor: {
    color: colors.gray500,
  },
  imgsLine: {
    position: "absolute",
    zIndex: 9999,
    top: "24px",
    display: "flex",
    gap: "8px",
    left: "24px",
  },
  imgInputContainer: {
    width: "100%",
    position: "relative",
  },
  imgs: {
    width: "163px",
    height: "92px",
    borderRadius: "4px",
    background: "#D9D9D9",
  },
  postButton: {
    width: "99px",
    height: "44px",
  },
})
