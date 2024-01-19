import * as stylex from "@stylexjs/stylex"
import { HStack, VStack } from "../Stack"
import { colors, font } from "../../styles/globalToken.stylex"

export const Post = () => {
  const list = [
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },

    {
      image: "123.png",
      categori: "전자기기",
      title: "이거 사셈",
      price: 9999,
      place: "창조실",
      success: false,
      id: 123,
    },
  ]

  return (
    <div {...stylex.props(styles.listWrapper)}>
      {list.map((e) => (
        <div key={e.id} {...stylex.props(styles.postContainer)}>
          <img src={e.image} {...stylex.props(styles.img)} />
          <VStack style={styles.infoContainer}>
            <span {...stylex.props(font.body3)}>{e.categori}</span>
            <span {...stylex.props(font.body1)}>{e.title}</span>
            <HStack style={styles.placepriceWrapper}>
              <span {...stylex.props(font.heading4)}>{e.price}원</span>
              <span {...stylex.props(font.body1, styles.place)}>{e.place}</span>
            </HStack>
          </VStack>
        </div>
      ))}
    </div>
  )
}

const styles = stylex.create({
  listWrapper: {
    display: "flex",
    width: "1280px",
    height: "auto",
    alignItems: "flex-start",
    gap: "48px 24px",
    flexWrap: "wrap",
  },
  postContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "16px",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "193px",
    width: "193px",
    borderRadius: "12px",
    backgroundColor: "#D9D9D9",
  },
  infoContainer: {
    gap: "8px",
  },
  placepriceWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  place: {
    color: colors.primary300,
  },
})
