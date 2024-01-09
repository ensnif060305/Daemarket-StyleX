/* eslint-disable @stylexjs/valid-styles */
import * as stylex from "@stylexjs/stylex"

export const weight = {
  bold: 700,
  semi: 600,
  medi: 500,
}

export const colors = stylex.defineVars({
  red: "#EE3131",
  blue: "#4173E1",
  gray800: "#121317",
  gray700: "#2A2A34",
  gray600: "#575767",
  gray500: "#8E8E9D",
  gray400: "#CECED1",
  gray300: "#EEEEF5",
  gray200: "#FAFAFC",
  gray100: "#FFFFFF",
  primary400: "#1DA796",
  primary300: "#1EB7A4",
  primary200: "#E0F4F1",
  primary100: "#EFF9F8",
})

export const shadow = stylex.defineVars({
  boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.10)",
})

export const size = stylex.defineVars({
  none: "0rem", //0px
  xxxsmall: "0.875rem", //14px
  xxsmall: "1rem", //16px
  xsmall: "1.125rem", //18px
  small: "1.25rem", //20px
  medium: "1.5rem", //24px
  large: "1.75rem", //28px
  xlarge: "2rem", //32px
  xxlarge: "2.5rem", //40px
  xxxlarge: "3rem", //48px
})

export const font = stylex.create({
  heading1: {
    fontSize: size.xlarge,
    lineHeight: size.xxxlarge,
    fontWeight: weight.bold,
  },
  heading2: {
    fontSize: size.medium,
    lineHeight: size.xxlarge,
    fontWeight: weight.bold,
  },
  heading3: {
    fontSize: size.xsmall,
    lineHeight: size.large,
    fontWeight: weight.semi,
  },
  heading4: {
    fontSize: size.xsmall,
    lineHeight: size.large,
    fontWeight: weight.bold,
  },
  body1: {
    fontSize: size.xxsmall,
    lineHeight: size.medium,
    fontWeight: weight.semi,
  },
  body2: {
    fontSize: size.xxsmall,
    lineHeight: size.medium,
    fontWeight: weight.medi,
  },
  body3: {
    fontSize: size.xxxsmall,
    lineHeight: size.small,
    fontWeight: weight.semi,
  },
  body4: {
    fontSize: size.xxxsmall,
    lineHeight: size.small,
    fontWeight: weight.medi,
  },
})
