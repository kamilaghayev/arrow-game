import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps, setUnSuccess } from "../store/slices"
import Controls from "../controls"
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "../../constants"
import RandomKeys from "../randomKeys"
import KeyPressed from "../keyPressed"
import Score from "../score"
import Modal from "../modalComponent"
import { Grid, Typography } from "@mui/material"

const Playground = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.playground)

  const timerRefreshId = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [isWinnedGame, setIsWinnedGame] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      timerRefreshId.current = setTimeout(() => {
        dispatch(setUnSuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(timerRefreshId.current as ReturnType<typeof setTimeout>)
    }

    return () => {
      clearInterval(timerRefreshId.current as ReturnType<typeof setTimeout>)
    }
  }, [isTimerActive, dispatch, state.currentStep])

  useEffect(() => {
    const isSuccessful =
      state.totalSuccesses === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccesses === END_GAME_CONDITIONS.UNSUCCESS_COUNT

    isSuccessful && setIsWinnedGame(true)
    isUnsuccessful && setIsWinnedGame(false)

    if (isSuccessful || isUnsuccessful) {
      setShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccesses, state.totalUnsuccesses])

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#ddead8",
        borderRadius: "12px",
        minHeight: "400px",
      }}
      p={4}
    >
      <Grid item md={6}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
      </Grid>

      <Grid item md={6}>
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />

        <Typography variant="h6" paddingTop={2}>
          Step: {state.currentStep}
        </Typography>

        <Score />
      </Grid>

      {showModal && (
        <Modal
          isOpen={showModal}
          setOpen={setShowModal}
          isWinnedGame={isWinnedGame}
        />
      )}
    </Grid>
  )
}

export default Playground
