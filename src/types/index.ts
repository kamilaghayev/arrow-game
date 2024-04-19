import type { Dispatch, SetStateAction } from "react"

type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IEndGameConditions {
  SUCCESS_COUNT: number
  UNSUCCESS_COUNT: number
}

export type { TypeSetState }
