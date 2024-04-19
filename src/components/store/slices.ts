import { createSlice } from "@reduxjs/toolkit"
import type { IPlaygroundState } from "./types"
import { ARROW_CODES } from "../../constants"

export const initialPlaygroundState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
  totalSuccesses: 0,
  totalUnsuccesses: 0,
}
export const playgroundSlice = createSlice({
  name: "playground",
  initialState: initialPlaygroundState,
  reducers: {
    setCurrentStep: state => {
      state.currentStep += 1
    },

    setSteps: state => {
      const randomkeys = Math.floor(Math.random() * ARROW_CODES.length)

      state.steps.push({
        currentValue: ARROW_CODES[randomkeys],
        enteredValue: null,
        success: null,
        id: state.currentStep,
      })
    },

    setEnteredValue: (state, action) => {
      if (!state.steps.length) return

      const step = state.steps[state.currentStep - 1]
      const isSuccess = step.currentValue === action.payload ? true : false

      if (step.enteredValue !== null) return
      state.steps[state.currentStep - 1] = {
        ...step,
        success: isSuccess,
        enteredValue: action.payload,
      }

      if (isSuccess) {
        state.totalSuccesses++
      } else {
        state.totalUnsuccesses++
        state.totalSuccesses = 0
      }
    },

    setUnSuccess: state => {
      if (state.steps.length < 1) return

      const step = state.steps[state.currentStep - 1]

      if (step.enteredValue === null) {
        state.totalSuccesses = 0
        state.totalUnsuccesses++

        state.steps[state.currentStep - 1] = {
          ...step,
          success: false,
        }
      }
    },

    resetStore: () => initialPlaygroundState,
  },
})

export const {
  setCurrentStep,
  setSteps,
  setEnteredValue,
  setUnSuccess,
  resetStore,
} = playgroundSlice.actions

export default playgroundSlice.reducer
