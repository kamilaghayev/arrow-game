import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit"
import playgroundReducer from "../components/store/slices"

export const store = configureStore({
  reducer: {
    playground: playgroundReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
