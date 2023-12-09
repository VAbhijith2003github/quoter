import { configureStore } from '@reduxjs/toolkit'
import quoterReducer from '../features/quoter/quoterSlice'

export default configureStore({
  reducer: {
    quoter: quoterReducer,
  },
})