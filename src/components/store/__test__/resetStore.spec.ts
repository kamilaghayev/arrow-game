import { ARROW_CODES } from "../../../constants"
import playgroundReducer, {
  initialPlaygroundState,
  resetStore,
  setCurrentStep,
  setEnteredValue,
  setSteps,
} from "../slices"

describe("reducer resetStore", () => {
  it("check resetStore", () => {
    const setCurrentStepState = playgroundReducer(
      initialPlaygroundState,
      setCurrentStep(),
    )
    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(ARROW_CODES[0]),
    )

    const resetStoreState = playgroundReducer(
      setEnteredValueState,
      resetStore(),
    )

    expect(resetStoreState).toEqual(initialPlaygroundState)
  })
})
