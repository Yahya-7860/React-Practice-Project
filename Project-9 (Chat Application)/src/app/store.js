import { configureStore } from '@reduxjs/toolkit'
import textReducers from '../Slice'

export const store = configureStore({
    reducer:textReducers
})