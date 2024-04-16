import { createSlice } from "@reduxjs/toolkit"
import type { IPlaygroundState } from "./types"
import { ARROW_CODES } from "../../../constants"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
}
export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: state => {
      state.currentStep += 1
    },

    setSteps: state => {
      const randomkeys = Math.floor(Math.random() * ARROW_CODES.length)

      state.steps.push({
        currentValue: ARROW_CODES[randomkeys],
        id: randomkeys,
      })
    },
  },
})

export const { setCurrentStep, setSteps } = playgroundSlice.actions

export default playgroundSlice.reducer
