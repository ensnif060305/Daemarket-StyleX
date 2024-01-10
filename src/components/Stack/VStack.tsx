import { Stack, StackProps } from "."

export const VStack = ({ style, children }: StackProps) => {
  return (
    <Stack dir="column" style={style}>
      {children}
    </Stack>
  )
}
