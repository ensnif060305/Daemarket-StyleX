export interface IIcon {
  cursor?: React.CSSProperties["cursor"]
  color?: string
  onClick?: () => void
  variant?: "BlackDesc" | "Only"
  visible?: boolean
}
