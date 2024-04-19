import type { DetailedHTMLProps, HTMLAttributes } from "react"
import type { TypeSetState } from "../../types"

export interface ControlsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isTimerActive: boolean
  setIsTimerActive: TypeSetState<boolean>
}
