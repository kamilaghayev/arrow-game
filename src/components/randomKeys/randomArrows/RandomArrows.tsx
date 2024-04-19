import type { FC } from "react"
import type { IPlaygroundSteps } from "../../store/types"
import { ARROWS } from "../../../constants"

const RandomArrows: FC<{ steps: IPlaygroundSteps[] }> = ({ steps }) => {
  console.log(steps)

  return (
    <>
      {steps.map(({ id, currentValue }: IPlaygroundSteps) => {
        return (
          <img
            key={id}
            src={ARROWS[currentValue as keyof typeof ARROWS]}
            alt={currentValue as keyof typeof ARROWS}
          />
        )
      })}
    </>
  )
}

export default RandomArrows
