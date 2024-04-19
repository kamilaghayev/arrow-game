import type { DetailedHTMLProps, HTMLAttributes } from "react"
import type { TypeSetState } from "../../types"

export interface IModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean
  setOpen: TypeSetState<boolean>
  isWinnedGame: boolean
}
