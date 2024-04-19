import ArrowLeft from "../assets/arrow-left.svg"
import ArrowRight from "../assets/arrow-right.svg"
import ArrowUp from "../assets/arrow-up.svg"
import ArrowDown from "../assets/arrow-down.svg"
import type { IEndGameConditions } from "../types"

export const ARROWS = {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
}
export const ARROW_CODES = Object.keys(ARROWS)

export const INTERVAL_TIME = 2000

export const END_GAME_CONDITIONS: IEndGameConditions = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
}
