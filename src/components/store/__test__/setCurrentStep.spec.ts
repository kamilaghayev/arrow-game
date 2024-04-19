import playgroundReducer, {
  initialPlaygroundState,
  setCurrentStep,
} from "../slices"

describe("reducer setCurrentStep", () => {
  it("check setCurrentStep", () => {
    const setCurrentStepState = playgroundReducer(
      initialPlaygroundState,
      setCurrentStep(),
    )

    expect(initialPlaygroundState.currentStep).toBe(0)
    expect(setCurrentStepState.currentStep).toBe(1)
  })
})
