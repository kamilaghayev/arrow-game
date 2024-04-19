import playgroundReducer, {
  initialPlaygroundState,
  setCurrentStep,
  setSteps,
  setUnSuccess,
} from "../slices"
describe("reducer setUnSuccess", () => {
  it("check setUnSuccess", () => {
    const setCurrentStepState = playgroundReducer(
      initialPlaygroundState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setUnSuccessState = playgroundReducer(setStepsState, setUnSuccess())

    expect(setUnSuccessState.totalUnsuccesses).toBe(1)
    expect(setUnSuccessState.steps[0].success).toBe(false)
  })
})
