import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps } from "./store/slices"
import Controls from "./controls"
import { INTERVAL_TIME } from "../../constants"
import RandomKeys from "./randomKeys"

const Playground = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.playground)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const timerRefreshId = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (isTimerActive) {
      timerRefreshId.current = setTimeout(() => {
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

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
    </div>
  )
}

export default Playground
