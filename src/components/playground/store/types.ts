export interface IPlaygroundSteps {
  currentValue: string
  id: number
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundSteps[]
}
