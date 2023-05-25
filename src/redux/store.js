import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import dishSlice from "./features/dishes/dishesSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        dish: dishSlice
    },
})
