import type { FC } from "react"
import type { ControlsProps } from "./Controls.props"

const Controls: FC<ControlsProps> = ({ isTimerActive, setIsTimerActive }) => {
  const timerPlay = () => setIsTimerActive(true)
  const timerPause = () => setIsTimerActive(false)
  return (
    <>
      <button onClick={timerPlay} disabled={isTimerActive}>
        Play
      </button>
      <button onClick={timerPause} disabled={!isTimerActive}>
        Pause
      </button>
    </>
  )
}

export default Controls
