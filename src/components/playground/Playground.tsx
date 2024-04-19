import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps, setUnSuccess } from "../store/slices"
import Controls from "../controls"
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "../../constants"
import RandomKeys from "../randomKeys"
import KeyPressed from "../keyPressed"
import Score from "../score"
import Modal from "../modal"

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
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      {showModal && (
        <Modal
          isOpen={showModal}
          setOpen={setShowModal}
          isWinnedGame={isWinnedGame}
        />
      )}
    </div>
  )
}

export default Playground
