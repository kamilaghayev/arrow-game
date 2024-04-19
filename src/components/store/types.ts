export interface IPlaygroundSteps {
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
  id: number
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundSteps[]
  totalSuccesses: number
  totalUnsuccesses: number
}
