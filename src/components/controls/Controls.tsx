import type { FC } from "react"
import type { ControlsProps } from "./Controls.props"
import { useAppSelector } from "../../app/hooks"
import { END_GAME_CONDITIONS } from "../../constants"

import ResetGame from "../resetGame/ResetGame"

import { Box, Button } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"

const buttonStyle = {
  borderRadius: "20px",
}

const Controls: FC<ControlsProps> = ({ isTimerActive, setIsTimerActive }) => {
  const { totalSuccesses, totalUnsuccesses } = useAppSelector(
    state => state.playground,
  )
  const timerPlay = () => setIsTimerActive(true)
  const timerPause = () => setIsTimerActive(false)

  const isSuccessed = totalSuccesses === END_GAME_CONDITIONS.SUCCESS_COUNT
  const isUnSuccessed = totalUnsuccesses === END_GAME_CONDITIONS.UNSUCCESS_COUNT

  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      {isSuccessed || isUnSuccessed ? (
        <ResetGame />
      ) : (
        <Button
          sx={{ ...buttonStyle }}
          variant="contained"
          onClick={timerPlay}
          disabled={isTimerActive}
        >
          <PlayArrowIcon />
          Play
        </Button>
      )}
      <Button
        sx={{ ...buttonStyle }}
        variant="contained"
        onClick={timerPause}
        disabled={!isTimerActive}
      >
        <PauseIcon />
        Pause
      </Button>
    </Box>
  )
}

export default Controls
