import { Stack, StackProps } from "."

export const HStack = ({ style, children }: StackProps) => {
  return (
    <Stack dir="row" style={style}>
      {children}
    </Stack>
  )
}
