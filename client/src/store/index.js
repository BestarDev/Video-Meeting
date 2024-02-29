import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import callReducer from './slices/callSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        call: callReducer
    },
    devTools: true,
})