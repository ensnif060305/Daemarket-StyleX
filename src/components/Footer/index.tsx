import { NotionIcon, LogoIcon } from "@/assets/icons"
import { HStack, VStack } from "@/components/Stack"
import * as stylex from "@stylexjs/stylex"
import { style as $ } from "./style"
import { font } from "../../styles/globalToken.stylex"

export const Footer = () => {
  return (
    <div {...stylex.props($.container)}>
      <div {...stylex.props($.wrapper)}>
        <VStack style={$.infoContainer}>
          <LogoIcon color="grey" />
          <VStack style={$.infoWrapper}>
            <HStack style={$.devContainer}>
              <span {...stylex.props(font.body4, $.developmentField, $.footerSpan)}>Front-End</span>
              <span {...stylex.props(font.body3, $.footerSpan)}>조문성</span>
            </HStack>
            <HStack style={$.devContainer}>
              <span {...stylex.props(font.body4, $.developmentField, $.footerSpan)}>Back-End</span>
              <HStack style={$.devContainer}>
                <span {...stylex.props(font.body3, $.footerSpan)}>강진현</span>
                <span {...stylex.props(font.body3, $.footerSpan)}>심예찬</span>
                <span {...stylex.props(font.body3, $.footerSpan)}>양희범</span>
              </HStack>
            </HStack>
            <HStack style={$.devContainer}>
              <span {...stylex.props(font.body4, $.developmentField, $.footerSpan)}>Designer</span>
              <span {...stylex.props(font.body3, $.footerSpan)}>박시원</span>
            </HStack>
          </VStack>
        </VStack>
        <NotionIcon />
      </div>
    </div>
  )
}
