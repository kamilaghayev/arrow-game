import type { FC } from "react"
import type { IPlaygroundSteps } from "../../store/types"
import { ARROWS } from "../../../constants"
import { IconButton } from "@mui/material"

const RandomArrows: FC<{ steps: IPlaygroundSteps[] }> = ({ steps }) => {
  const bgColor =
    steps[steps.length - 1].success === null
      ? "white"
      : steps[steps.length - 1].success
        ? "green"
        : "red"

  return (
    <>
      {steps.map(({ id, currentValue }: IPlaygroundSteps) => {
        return (
          <IconButton sx={{ p: 1, backgroundColor: bgColor }}>
            <img
              key={id}
              src={ARROWS[currentValue as keyof typeof ARROWS]}
              alt={currentValue as keyof typeof ARROWS}
            />
          </IconButton>
        )
      })}
    </>
  )
}

export default RandomArrows
