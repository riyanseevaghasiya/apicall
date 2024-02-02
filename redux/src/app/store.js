import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/reducers/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


