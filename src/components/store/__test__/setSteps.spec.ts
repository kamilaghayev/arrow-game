import playgroundReducer, {
  initialPlaygroundState,
  setCurrentStep,
  setSteps,
} from "../slices"
describe("reducer setSteps", () => {
  it("check setSteps", () => {
    const setCurrentStepState = playgroundReducer(
      initialPlaygroundState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    expect(initialPlaygroundState.steps.length).toBe(0)
    expect(setStepsState.steps.length).toBe(1)

    const firstStep = {
      currentValue: setStepsState.steps[0].currentValue,
      enteredValue: null,
      success: null,
      id: 1,
    }

    expect(setStepsState.steps[0]).toEqual(firstStep)
  })
})
