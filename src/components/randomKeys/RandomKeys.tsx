import type { FC } from "react"
import type { RandomKeysProps } from "./RandomKeys.props"
import { useAppSelector } from "../../app/hooks"
import WelcomeText from "./welcomeText"
import RandomArrows from "./randomArrows"
import { Box } from "@mui/material"

const RandomKeys: FC<RandomKeysProps> = ({ isTimerActive }) => {
  const steps = useAppSelector(state => state.playground.steps)

  return (
    <Box sx={{ minHeight: "40px" }}>
      {steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows steps={steps} />
      )}
    </Box>
  )
}

export default RandomKeys
