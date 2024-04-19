import type { FC } from "react"
import type { ControlsProps } from "./Controls.props"
import { useAppSelector } from "../../app/hooks"
import { END_GAME_CONDITIONS } from "../../constants"
import ResetGame from "../resetGame/ResetGame"
import { Box, Button } from "@mui/material"

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
          variant="contained"
          onClick={timerPlay}
          disabled={isTimerActive}
        >
          Play
        </Button>
      )}
      <Button
        variant="contained"
        onClick={timerPause}
        disabled={!isTimerActive}
      >
        Pause
      </Button>
    </Box>
  )
}

export default Controls
