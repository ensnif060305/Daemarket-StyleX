import banner from "@/assets/banner.png"
import { Input } from "@/components/Common/Input"
import { HStack, VStack } from "@/components/Stack"
import { colors, font } from "../../styles/globalToken.stylex"
import * as stylex from "@stylexjs/stylex"
import { Post } from "@/components/Post"
import { CloseIcon } from "@/assets/icons"

const MainPage = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.wrapper)}>
        <img {...stylex.props(styles.img)} src={banner} />
        <VStack style={styles.postContainer}>
          <HStack style={styles.searchBar}>
            <span {...stylex.props(font.heading2)}>최근 올라온 게시물</span>
            <Input type="search">
              <CloseIcon />
            </Input>
            <HStack style={styles.dropDownContainer}>
              <select {...stylex.props(styles.dropdown)}>
                <option value="" disabled selected>
                  정렬
                </option>
                <option>최신순</option>
                <option>인기순</option>
                <option>가격 낮은 순</option>
                <option>가격 높은 순</option>
              </select>
              <select {...stylex.props(styles.dropdown)}>
                <option value="" disabled selected>
                  카테코리
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
            </HStack>
          </HStack>
          <Post />
        </VStack>
      </div>
    </div>
  )
}

export default MainPage

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
    alignItems: "flex-start",
    gap: "48px",
  },
  img: {
    width: "100%",
    minWidth: "720px",
    backgroundSize: "cover",
    borderRadius: "24px",
  },
  postContainer: {
    justifyContent: "center",
    gap: "24px",
  },
  searchBar: {
    justifyContent: "space-between",
  },
  dropdown: {
    width: "160px",
    height: "40px",
    padding: "0px 12px",
    gap: "4px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.gray300,
    backgroundColor: colors.gray200,
  },
  dropDownContainer: {
    gap: "8px",
  },
})
