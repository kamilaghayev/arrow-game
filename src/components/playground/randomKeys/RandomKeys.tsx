import type { FC } from "react"
import type { RandomKeysProps } from "./RandomKeys.props"
import { useAppSelector } from "../../../app/hooks"
import { ARROWS } from "../../../constants"
import type { IPlaygroundSteps } from "../store/types"

const RandomKeys: FC<RandomKeysProps> = ({ isTimerActive }) => {
  const steps = useAppSelector(state => state.playground.steps)
  console.log(steps)

  return (
    <div>
      {steps.map(({ id, currentValue }: IPlaygroundSteps) => {
        return (
          <img
            key={id}
            src={ARROWS[currentValue as keyof typeof ARROWS]}
            alt={currentValue}
          />
        )
      })}
    </div>
  )
}

export default RandomKeys
