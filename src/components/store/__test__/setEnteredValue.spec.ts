import { ARROW_CODES } from "../../../constants"
import playgroundReducer, {
  initialPlaygroundState,
  setCurrentStep,
  setEnteredValue,
  setSteps,
} from "../slices"
describe("reducer playgroundReducer", () => {
  it("check setEnteredValue", () => {
    const enderedValue = ARROW_CODES[0]
    const setCurrentStepState = playgroundReducer(
      initialPlaygroundState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(enderedValue),
    )

    expect(setStepsState.steps[0].enteredValue).toBe(null)
    expect(setEnteredValueState.steps[0].enteredValue).toBe(enderedValue)
  })
  it("check totalSuccesses and totalUnsuccesses", () => {
    const setCurrentStepState = playgroundReducer(
      initialPlaygroundState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(setStepsState.steps[0].currentValue),
    )

    expect(setStepsState.totalSuccesses).toBe(0)
    expect(setStepsState.totalUnsuccesses).toBe(0)

    expect(setEnteredValueState.totalSuccesses).toBe(1)
    expect(setEnteredValueState.totalUnsuccesses).toBe(0)
  })
})
