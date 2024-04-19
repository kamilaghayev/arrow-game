import { CircularProgress, Typography } from "@mui/material"
import type { FC } from "react"

interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: FC<IWelcomeTextProps> = ({ isTimerActive }) => {
  return (
    <span>
      {!isTimerActive ? (
        <Typography>
          'Press "Play" to start the game and wait for the first arrow to
          appear'
        </Typography>
      ) : (
        <CircularProgress />
      )}
    </span>
  )
}

export default WelcomeText
